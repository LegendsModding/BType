// Interface for team names.
interface TeamNames {
  wild: TeamNameWild;
  blue: TeamNameBlue;
  red: TeamNameRed;
  orange: TeamNameOrange;
  mobAlliance: TeamNameMob;
  none: TeamNameEmpty;
}

// Interface for alliance types.
interface AllianceTypes {
  friendly: string;
  enemy: string;
  anyTeam: string;
  patchAll: string;
}

// Interface for ticket types.
interface TicketTypes {
  build: string;
  gather: string;
  spawn: string;
}
