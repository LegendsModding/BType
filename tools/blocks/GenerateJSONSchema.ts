/* eslint-disable no-console */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Strips single-line and multi-line comments from a JSON content string.
 * @param {string} content The raw JSON content as a string.
 * @returns {string} - The JSON content with all comments removed.
 */
function stripComments(content: string): string {
  // Remove single-line comments (// ...)
  content = content.replace(/\/\/.*$/gm, "");
  // Remove multi-line comments (/* ... */)
  content = content.replace(/\/\*[\s\S]*?\*\//g, "");
  return content;
}

/**
 * Represents the structure of a JSON schema.
 */
interface Schema {
  /**
   * A set of possible types for the current property or value.
   */
  types: Set<string>;

  /**
   * If the type is an object, this contains the schema for its properties.
   */
  children?: Record<string, Schema>;

  /**
   * If the type is an array, this contains the schema for its items.
   */
  items?: Schema;

  /**
   * A set of observed values for the current property or value.
   */
  values?: Set<unknown>;
}

/**
 * Generates a schema for a given value recursively.
 * @param {unknown} value The value to generate a schema for.
 * @returns {Schema} - The generated schema for the provided value.
 */
function generateSchema(value: unknown): Schema {
  const schema: Schema = { types: new Set(), values: new Set() };

  if (value === null) {
    schema.types.add("null");
    schema.values?.add(null);
    return schema;
  }

  const type = Array.isArray(value) ? "array" : typeof value;
  schema.types.add(type);

  if (type === "object" && value !== null && typeof value === "object") {
    schema.children = {};
    for (const [key, val] of Object.entries(value)) {
      schema.children[key] = generateSchema(val);
    }
  } else if (type === "array" && Array.isArray(value)) {
    schema.items = value.reduce((acc: Schema, item: unknown) => {
      const itemSchema = generateSchema(item);
      acc.values?.add(item);
      return mergeSchemas(acc, itemSchema);
    }, createBaseSchema());
  } else {
    schema.values?.add(value);
  }

  return schema;
}

/**
 * Merges two schemas into one, combining their types, children, and items.
 * @param {Schema} schema1 The first schema to merge.
 * @param {Schema} schema2 The second schema to merge.
 * @returns {Schema} - The merged schema.
 */
function mergeSchemas(schema1: Schema, schema2: Schema): Schema {
  const merged: Schema = createBaseSchema();

  // Merge types
  merged.types = new Set([...schema1.types, ...schema2.types]);

  // Merge observed values
  if (schema1.values && schema2.values) {
    merged.values = new Set([...schema1.values, ...schema2.values]);
  } else {
    merged.values = schema1.values ?? schema2.values;
  }

  // Merge object children
  if (merged.types.has("object")) {
    merged.children = mergeObjects(
      schema1.children ?? {},
      schema2.children ?? {},
    );
  }

  // Merge array items
  if (merged.types.has("array")) {
    merged.items = mergeSchemas(
      schema1.items ?? createBaseSchema(),
      schema2.items ?? createBaseSchema(),
    );
  }

  return merged;
}

/**
 * Merges two objects containing schemas for each key.
 * @param {Record<string, Schema>} obj1 The first object to merge.
 * @param {Record<string, Schema>} obj2 The second object to merge.
 * @returns {Record<string, Schema>} - The merged object.
 */
function mergeObjects(
  obj1: Record<string, Schema>,
  obj2: Record<string, Schema>,
): Record<string, Schema> {
  const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  const merged: Record<string, Schema> = {};

  for (const key of allKeys) {
    merged[key] = mergeSchemas(
      obj1[key] || createBaseSchema(),
      obj2[key] || createBaseSchema(),
    );
  }

  return merged;
}

/**
 * Creates a base schema with empty types, children, and items.
 * @returns {Schema} - A base schema object.
 */
function createBaseSchema(): Schema {
  return {
    types: new Set(),
    children: undefined,
    items: undefined,
    values: new Set(),
  };
}

/**
 * Normalizes the schema into a JSON-compatible format.
 * @param {Schema} schema The schema to normalize.
 * @returns {Record<string, unknown>} - The normalized schema.
 */
function normalizeSchema(schema: Schema): Record<string, unknown> {
  const normalized: Record<string, unknown> = {
    type: [...schema.types].sort(),
  };

  if (schema.children) {
    normalized.properties = Object.entries(schema.children).reduce(
      (acc: Record<string, unknown>, [key, childSchema]) => {
        const normalizedChild = normalizeSchema(childSchema);
        acc[key] = normalizedChild;

        // Add a comment listing all observed values
        if (childSchema.values && childSchema.values.size > 0) {
          const values = Array.from(childSchema.values).map(String);
          normalizedChild.description = `/* Possible values: ${values.join(", ")} */`;
        }

        return acc;
      },
      {},
    );
    normalized.additionalProperties = false; // Restrict additional properties
  }

  if (schema.items) {
    normalized.items = normalizeSchema(schema.items);
  }

  // Add enum if there are discrete values
  if (schema.values && schema.values.size > 0) {
    normalized.enum = Array.from(schema.values);
  }

  return normalized;
}

/**
 * Processes a JSON file and generates its schema.
 * @param {string} filePath The path to the JSON file.
 * @returns {Schema | null} - The generated schema, or null if an error occurs.
 */
function processFile(filePath: string): Schema | null {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const strippedContent = stripComments(content);
    const data = JSON.parse(strippedContent);
    return generateSchema(data);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error processing ${filePath}: ${error.message}`);
    } else {
      console.error(`Error processing ${filePath}: Unknown error`);
    }
    return null;
  }
}

/**
 * Generates a JSON schema from a directory of JSON files.
 * @param {string} inputDir The directory containing JSON files.
 * @param {string} outputPath The path to save the generated schema.
 */
function generateSchemaFromDirectory(
  inputDir: string,
  outputPath: string,
): void {
  try {
    const files = fs
      .readdirSync(inputDir)
      .filter((file) => file.endsWith(".json"))
      .map((file) => path.join(inputDir, file));

    if (files.length === 0) {
      console.log(inputDir);
      throw new Error("No JSON files found in directory");
    }

    const baseSchema = createBaseSchema();
    const mergedSchema = files.reduce((acc: Schema, file: string) => {
      const fileSchema = processFile(file);
      return fileSchema ? mergeSchemas(acc, fileSchema) : acc;
    }, baseSchema);

    const finalSchema = normalizeSchema(mergedSchema);

    // Add $schema reference to JSON Schema Draft 2020-12
    const jsonSchema = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      ...finalSchema,
    };

    fs.writeFileSync(outputPath, JSON.stringify(jsonSchema, null, 2));
    console.log(`Schema generated successfully at: ${outputPath}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error generating schema: ${error.message}`);
    } else {
      console.error(`Error generating schema: Unknown error`);
    }
    process.exit(1);
  }
}

/**
 * Ensures that the specified directories exist, creating them if necessary.
 * @param {string} inputDir The input directory to ensure.
 * @param {string} outputDir The output directory to ensure.
 */
function ensureDirectories(inputDir: string, outputDir: string): void {
  [inputDir, outputDir].forEach((dir) =>
    fs.mkdirSync(dir, { recursive: true }),
  );
}

// CLI execution
const [
  inputDir = "../../../../data/rp/blocks",
  outputFile = "../../../../generated/schemas/blocks_client_schema.json",
] = process.argv.slice(2);

const outputDir = "../../../../generated/schemas";
const resolvedInput = path.resolve(__dirname, inputDir);
const resolvedOutput = path.resolve(__dirname, outputFile);

ensureDirectories(resolvedInput, outputDir);
generateSchemaFromDirectory(resolvedInput, resolvedOutput);
