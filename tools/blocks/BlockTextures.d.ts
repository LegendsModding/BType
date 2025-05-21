type SmartTextureConfig = {
  default: string;
  empty?: string;
  L?: string;
  line?: string;
  cross?: string;
  T?: string;
  spoke?: string;
  [key: string]: string | undefined;
};

type BlockTextures = Record<
  string,
  string | { smart: SmartTextureConfig } | undefined
>;
