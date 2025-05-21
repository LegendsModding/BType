type GameModeCampaign = "campaign";
type GameModeCreative = "creative";
type GameModeConquest = "conquest";
type GameModeAdventure = "adventure";

type GameModeAny =
  | GameModeCampaign
  | GameModeCreative
  | GameModeConquest
  | GameModeAdventure;

type GameModeAll = [
  GameModeCampaign,
  GameModeCreative,
  GameModeConquest,
  GameModeAdventure,
];

type GameModes = {
  campaign: GameModeCampaign;
  creative: GameModeCreative;
  conquest: GameModeConquest;
  adventure: GameModeAdventure;
};
