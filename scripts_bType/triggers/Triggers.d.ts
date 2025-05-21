type Trigger = {
  eval: () => boolean;
};

type GenericTriggerResult = {
  eval: () => boolean;
};

type InputElementTrigger = string | number | boolean | InputElementTrigger[];

type ProcessedInput = (string | number | boolean)[][];
