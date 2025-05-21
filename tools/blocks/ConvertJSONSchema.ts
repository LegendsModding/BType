/**
 * Convert JSON Schema to TypeScript definitions.
 *
 * This script reads a JSON Schema file and generates TypeScript interfaces and type aliases.
 * Improvements include:
 *  - Splitting large enum types into separate files.
 *  - Formatting long unions in a multi-line style.
 *  - Sanitizing all type names (removing colons, dashes, underscores) so that generated
 *    interface names are valid (e.g. BlockSchemaMinecraftBlockDescription rather than BlockSchemaMinecraft:blockDescription).
 *  - Running Prettier and ESLint on the generated files.
 *  - Appending reference paths to the project's /types/index.d.ts file.
 *
 * @module ConvertJSONSchema
 */

import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import { StringUtils } from "../biomes/utils/StringUtils.ts";

/**
 * Interface representing a JSON Schema.
 */
interface JSONSchema {
  type?: string | string[];
  description?: string;
  properties?: Record<string, JSONSchema>;
  required?: string[];
  additionalProperties?: boolean | JSONSchema;
  items?: JSONSchema;
  enum?: (string | number | boolean | Record<string, unknown> | any[])[];
  $ref?: string;
  definitions?: Record<string, JSONSchema>;
}

/**
 * Maps JSON Schema primitive types to TypeScript types.
 */
const TypeMap: Record<string, string> = {
  string: "string",
  number: "number",
  integer: "number", // Map "integer" to "number"
  boolean: "boolean",
  object: "object",
  array: "array",
};

/**
 * Determines if enums should be split into separate files.
 * Also defines the threshold for splitting.
 */
const SPLIT_ENUMS = true;
const ENUM_SPLIT_THRESHOLD = 10; // if union has > 10 members, split it out

/**
 * Holds inline type aliases (for enums) that are small.
 */
const inlineTypeAliases: Map<string, string> = new Map();
/**
 * Holds definitions for large enums that will be written to separate files.
 */
const externalEnumTypeAliases: Map<string, string> = new Map();

/**
 * Stores generated interface definitions.
 */
const interfaceDefinitions: Map<string, string> = new Map();

/**
 * Formats a property key for an interface.
 * Namespaced keys (ones that include a colon) are left as-is (wrapped in quotes)
 * while others are converted to camelCase.
 *
 * @param propName - The original property name.
 * @returns The formatted property name.
 */
function formatPropertyName(propName: string): string {
  return propName.includes(":")
    ? `"${propName}"`
    : StringUtils.toCamelCase(propName);
}

/**
 * Formats a string to be used as a TypeScript type or interface name.
 * It splits on colons, dashes, and underscores and then capitalizes each word.
 * Colons are replaced with an empty string to ensure valid TypeScript identifiers.
 *
 * @param str - The string to format.
 * @returns The formatted type name.
 */
function formatTypeName(str: string): string {
  return str
    .split(/[:\-_]+/) // Split on colons, dashes, and underscores
    .filter((part) => part.length > 0) // Remove empty parts
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(""); // Join without any separator
}

/**
 * Resolves a JSON Schema $ref and returns the corresponding type name.
 *
 * @param ref - The $ref string.
 * @returns The resolved type name.
 * @throws If the $ref path is unsupported.
 */
function resolveRef(ref: string): string {
  if (!ref.startsWith("#/definitions/")) {
    throw new Error(`Unsupported $ref path: ${ref}`);
  }
  const refName = ref.split("/").pop()!;
  return formatTypeName(refName);
}

/**
 * Generates a type alias name for an enum based on the provided base name.
 *
 * @param baseName - The base name for the enum.
 * @returns The generated type alias name.
 */
function createEnumTypeAliasName(baseName: string): string {
  return formatTypeName(baseName) + "Type";
}

/**
 * Converts a JSON literal value into a valid TypeScript literal type representation.
 *
 * @name convertLiteralToType
 * @description Recursively converts JSON literal values—including objects and arrays—into valid
 * TypeScript literal type representations. This ensures that enum definitions correctly represent
 * objects rather than outputting "[object Object]".
 * @param value - The JSON literal value to convert.
 * @returns A string representing the value as a valid TypeScript literal type.
 * @example
 * // Returns '"hello"'
 * convertLiteralToType("hello");
 *
 * @example
 * // Returns '{ a: 1, b: "text" }'
 * convertLiteralToType({ a: 1, b: "text" });
 */
function convertLiteralToType(value: any): string {
  if (typeof value === "string") {
    return JSON.stringify(value);
  } else if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  } else if (value === null) {
    return "null";
  } else if (Array.isArray(value)) {
    const elements = value.map((el) => convertLiteralToType(el));
    return `[${elements.join(", ")}]`;
  } else if (typeof value === "object") {
    const entries = Object.entries(value).map(([key, val]) => {
      const safeKey = /^[a-zA-Z_]\w*$/.test(key) ? key : JSON.stringify(key);
      return `${safeKey}: ${convertLiteralToType(val)}`;
    });
    return `{ ${entries.join(", ")} }`;
  }
  return JSON.stringify(value);
}

/**
 * Registers an enum type alias. If the union is large (based on ENUM_SPLIT_THRESHOLD)
 * and SPLIT_ENUMS is enabled, it writes the type alias to an external file.
 *
 * @param baseName - The base name to derive the alias.
 * @param enumValues - The enum values.
 * @returns The name of the created type alias.
 */
function registerEnumType(
  baseName: string,
  enumValues: (string | number | boolean | Record<string, unknown> | any[])[]
): string {
  const typeAliasName = createEnumTypeAliasName(baseName);

  // Use our helper function to convert all literal values (including objects/arrays)
  const useMultiline = enumValues.length > 3;
  const unionStr = useMultiline
    ? enumValues
        .map((v) => convertLiteralToType(v))
        .map((s) => "  " + s)
        .join(" |\n")
    : enumValues.map((v) => convertLiteralToType(v)).join(" | ");

  const typeDef = `declare type ${typeAliasName} = ${
    useMultiline ? "\n" + unionStr + "\n" : unionStr
  };`;

  if (SPLIT_ENUMS && enumValues.length > ENUM_SPLIT_THRESHOLD) {
    // Save to external enums map – will be written later to its own file.
    if (!externalEnumTypeAliases.has(typeAliasName)) {
      externalEnumTypeAliases.set(typeAliasName, typeDef);
    }
  } else {
    // Keep inline.
    if (!inlineTypeAliases.has(typeAliasName)) {
      inlineTypeAliases.set(typeAliasName, typeDef);
    }
  }
  return typeAliasName;
}

/**
 * Generates a type name for a property by simplifying the parent type name
 * and combining it with the property name.
 *
 * @param parentName - The parent's type name.
 * @param propName - The property name.
 * @returns The combined type name.
 */
function getPropertyTypeName(parentName: string, propName: string): string {
  // Remove redundant prefixes like "BlockSchemaMinecraftBlockComponents" from the parent name.
  const simplifiedParentName = parentName
    .replace(/^BlockSchema/, "")
    .replace(/^MinecraftBlockComponents/, "")
    .replace(/^Badger/, "")
    .replace(/^Minecraft/, "")
    .replace(/^BlockComponents/, "");

  // Combine the simplified parent name with the property name.
  const combinedName = simplifiedParentName + formatTypeName(propName);

  // Ensure the name is unique and valid.
  return formatTypeName(combinedName);
}

/**
 * Converts a JSON Schema into a TypeScript type.
 *
 * @param schema - The JSON Schema to convert.
 * @param typeName - The base name for the generated type.
 * @returns The TypeScript type name corresponding to the schema.
 */
function convertSchema(schema: JSONSchema, typeName: string): string {
  if (schema.$ref) {
    return resolveRef(schema.$ref);
  }

  if (schema.enum) {
    return registerEnumType(typeName, schema.enum);
  }

  const schemaType = schema.type ?? "object";
  const types = Array.isArray(schemaType) ? schemaType : [schemaType];

  if (types.includes("object")) {
    return convertObject(schema, typeName);
  } else if (types.includes("array")) {
    return convertArray(schema, typeName);
  } else if (types.some((t) => ["string", "number", "boolean"].includes(t))) {
    return convertPrimitive(schema, typeName);
  } else {
    throw new Error(`Unsupported type(s): ${types.join(" | ")}`);
  }
}

/**
 * Converts a JSON Schema object type into a TypeScript interface.
 *
 * @param schema - The JSON Schema object.
 * @param typeName - The base name for the interface.
 * @param isTopLevel - Whether this is the top-level schema.
 * @returns The name of the generated interface.
 */
function convertObject(
  schema: JSONSchema,
  typeName: string,
  isTopLevel: boolean = false,
): string {
  const properties = schema.properties ?? {};
  const required = schema.required ?? [];
  const lines: string[] = [];

  for (const [propName, propSchema] of Object.entries(properties)) {
    const formattedPropName = formatPropertyName(propName);
    const propTypeName = getPropertyTypeName(typeName, propName);
    const propType = convertSchema(propSchema, propTypeName);
    const isRequired = required.includes(propName);
    lines.push(`  ${formattedPropName}${isRequired ? "" : "?"}: ${propType};`);
  }

  // Handle additionalProperties if defined as a schema
  if (
    schema.additionalProperties &&
    typeof schema.additionalProperties === "object"
  ) {
    const additionalType = convertSchema(
      schema.additionalProperties,
      typeName + "AdditionalProperty",
    );
    lines.push(`  [key: string]: ${additionalType};`);
  } else if (schema.additionalProperties === true) {
    lines.push(`  [key: string]: any;`);
  }

  const interfaceName = formatTypeName(typeName);
  const interfaceDef = `interface ${interfaceName} {\n${lines.join("\n")}\n}`;
  interfaceDefinitions.set(interfaceName, interfaceDef);

  // Process definitions if present at the top level.
  if (isTopLevel && schema.definitions) {
    for (const [defName, defSchema] of Object.entries(schema.definitions)) {
      const defTypeName = formatTypeName(defName);
      convertSchema(defSchema, defTypeName);
    }
  }

  return interfaceName;
}

/**
 * Converts a JSON Schema array type into a TypeScript array type.
 *
 * @param schema - The JSON Schema array schema.
 * @param typeName - The base name for the array item type.
 * @returns The TypeScript type representing the array.
 */
function convertArray(schema: JSONSchema, typeName: string): string {
  if (!schema.items) {
    return "any[]";
  }
  const itemType = convertSchema(schema.items, typeName + "Item");
  return `${itemType}[]`;
}

/**
 * Converts a JSON Schema primitive type into a TypeScript type.
 *
 * @param schema - The JSON Schema primitive.
 * @param _typeName - The base name for the primitive type.
 * @returns The TypeScript type representing the primitive.
 */
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
function convertPrimitive(schema: JSONSchema, typeName: string): string {
  if (Array.isArray(schema.type)) {
    const mapped = schema.type.map((t) => TypeMap[t] || t);
    return mapped.join(" | ");
  } else {
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    return TypeMap[schema.type || "any"] || schema.type || "any";
  }
}

/**
 * Processes the entire JSON Schema and returns the complete TypeScript definitions.
 * If enum splitting is enabled, the main output will include import statements for external enums.
 *
 * @param schema - The JSON Schema to process.
 * @param rootName - The root type name for the schema.
 * @returns The content for the main TypeScript definitions file.
 */
function processSchema(schema: JSONSchema, rootName: string): string {
  // Ensure the root type name is sanitized.
  const sanitizedRootName = formatTypeName(rootName);
  convertSchema(schema, sanitizedRootName);

  const inlineAliases = Array.from(inlineTypeAliases.values()).join("\n\n");
  const interfaces = Array.from(interfaceDefinitions.values()).join("\n\n");

  return [inlineAliases, interfaces].filter(Boolean).join("\n\n");
}

/**
 * Writes out the generated files. If enum splitting is enabled,
 * the external enum definitions are written to separate files in the specified enumsDir.
 *
 * @param mainOutput - The content for the main definitions file.
 * @param outputDir - The output directory for the main file.
 * @param enumsDir - The directory (relative to outputDir) where enum files are written.
 */
function writeOutputFiles(
  mainOutput: string,
  outputDir: string,
  enumsDir: string,
): void {
  // Ensure the output directory exists.
  fs.mkdirSync(outputDir, { recursive: true });
  const mainFilePath = path.join(outputDir, "index.d.ts");

  // Write external enums if enabled.
  if (SPLIT_ENUMS && externalEnumTypeAliases.size > 0) {
    const fullEnumsDir = path.join(outputDir, enumsDir);
    fs.mkdirSync(fullEnumsDir, { recursive: true });
    for (const [typeAliasName, typeDef] of externalEnumTypeAliases.entries()) {
      const enumFilePath = path.join(fullEnumsDir, `${typeAliasName}.d.ts`);
      fs.writeFileSync(enumFilePath, typeDef, "utf-8");
      console.log(`Enum type ${typeAliasName} written to ${enumFilePath}`);
    }
  }

  // Write the main definitions file.
  fs.writeFileSync(mainFilePath, mainOutput, "utf-8");
  console.log(`Main TypeScript definitions written to ${mainFilePath}`);
}

/**
 * Appends reference paths to the project's /types/index.d.ts file.
 *
 * @param outputDir - The directory containing the generated files.
 * @param projectTypesDir - The directory where the project's /types/index.d.ts file is located.
 */
function appendReferencePaths(
  outputDir: string,
  projectTypesDir: string,
): void {
  const projectIndexFilePath = path.join(projectTypesDir, "index.d.ts");
  const relativePath = path
    .relative(projectTypesDir, outputDir)
    .replace(/\\/g, "/"); // Replace backslashes with forward slashes

  // Generate reference paths for the main file and enums.
  const referencePaths: string[] = [];
  referencePaths.push(`/// <reference path="${relativePath}/index.d.ts" />`);

  if (SPLIT_ENUMS && externalEnumTypeAliases.size > 0) {
    for (const typeAliasName of externalEnumTypeAliases.keys()) {
      referencePaths.push(
        `/// <reference path="${relativePath}/enums/${typeAliasName}.d.ts" />`,
      );
    }
  }

  // Read the existing content of the project's index.d.ts file.
  let existingContent = "";
  if (fs.existsSync(projectIndexFilePath)) {
    existingContent = fs.readFileSync(projectIndexFilePath, "utf-8");
  }

  // Append new reference paths, ensuring no duplicates.
  const newReferences = referencePaths
    .filter((ref) => !existingContent.includes(ref))
    .join("\n");

  if (newReferences) {
    fs.appendFileSync(projectIndexFilePath, `\n${newReferences}\n`, "utf-8");
    console.log(`Updated ${projectIndexFilePath} with new reference paths.`);
  } else {
    console.log(`No new reference paths to add to ${projectIndexFilePath}.`);
  }
}

/**
 * Runs Prettier and ESLint on the generated output directory.
 *
 * This version sets the working directory (cwd) to the output directory and runs
 * the commands against "." so that they process all files within that directory.
 *
 * @param outputDir - The directory containing the generated files.
 */
function runPrettierAndEslint(outputDir: string): void {
  try {
    console.log("Running Prettier...");
    execSync(`npx prettier --write .`, {
      cwd: outputDir,
      stdio: "inherit",
    });

    console.log("Running ESLint...");
    execSync(`npx eslint --fix .`, {
      cwd: outputDir,
      stdio: "inherit",
    });
    console.log("Formatting and linting complete.");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error running Prettier or ESLint:", error);
    if (error.stderr) {
      console.error("stderr:", error.stderr.toString());
    }
  }
}

/**
 * Reads a JSON Schema file and writes the corresponding TypeScript definitions.
 * If enum splitting is enabled, large enum types are written to separate files.
 * After generation, Prettier and ESLint are run on the output.
 *
 * @param inputFilePath - Path to the JSON Schema file.
 * @param outputDir - Directory where the TypeScript definitions will be written.
 * @param rootTypeName - The root type name to use for the generated definitions.
 * @param projectTypesDir - The directory where the project's /types/index.d.ts file is located.
 */
function main(
  inputFilePath: string,
  outputDir: string,
  rootTypeName: string,
  projectTypesDir: string,
): void {
  const schemaContent = fs.readFileSync(inputFilePath, "utf-8");
  const schema: JSONSchema = JSON.parse(schemaContent);
  const mainOutput = processSchema(schema, rootTypeName);
  // Enums will be written into an "enums" subfolder within outputDir.
  writeOutputFiles(mainOutput, outputDir, "enums");

  // Append reference paths to the project's /types/index.d.ts file.
  appendReferencePaths(outputDir, projectTypesDir);

  // Run Prettier and ESLint on the generated output.
  runPrettierAndEslint(outputDir);
}

// Example usage:
// Input JSON schema file path.
const inputFilePath = "./generated/schemas/blocks_client_schema.json";
// Output directory for definitions (will create index.d.ts and an enums/ folder).
const outputDir = "./generated/blocks";
// Root type name.
const rootTypeName = "BlockSchema";
// Directory where the project's /types/index.d.ts file is located.
const projectTypesDir = "./types";
main(inputFilePath, outputDir, rootTypeName, projectTypesDir);
