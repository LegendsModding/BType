type BlockDecorationConfig =
  | string
  | {
      default?: string;
      l?: string;
      l_mirror?: string;
      line?: string;
      metamaterial_override?: string;
      [key: string]: string | undefined;
    };
