type FactionCategory =
  | "culture"
  | "end"
  | "piglin"
  | "player"
  | "host"
  | "undead";

type FactionCategoryNoPlayer = "culture" | "end" | "piglin" | "host" | "undead";

type FactionShortNameAndType = {
  factionShortName: string;
  factionType: string;
};

type FactionNameIdNoPlayer =
  | AnyCultureFaction
  | AnyEndFaction
  | AnyPiglinMainHorde
  | AnyHostFaction
  | AnyUndeadFaction;

type FactionID = number;
