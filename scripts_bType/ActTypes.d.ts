interface GlobalVariableAct {
  started: string;
}

interface GlobalVariablesAct0 extends GlobalVariableAct {
  // TODO
}

interface GlobalVariablesAct1 extends GlobalVariableAct {
  basesDestroyed: string;
  firstSunrise: string;
  firstNightfall: string;
  firstUprise: string;
}

interface GlobalVariablesActs {
  act1: GlobalVariablesAct1;
}

type ActKey = keyof GlobalVariablesActs;

type EntityGroupType<T extends "single" | "multiple"> = T extends "single"
  ? number
  : number[];

type SingleEntity = EntityGroupType<"single">; // number
type MultipleEntities = EntityGroupType<"multiple">; // number[]
type EntityGroup = SingleEntity | MultipleEntities;

type VillageID = number;
type InvasionID = number;
type DeckName = string;
type LibraryIndex = number;
type BuffName = string;
type MaxAmount = number;
type MinDistance = number;
type MaxDistance = number;
type AmountToAddOrSubtract = number;
type ObjectiveName = string;
type NoReturn = void;
type Tag = string;
type TagArray = Tag[];

/**
 * Represents a presentation event name.
 * Used for triggering synchronized narrative/cinematic events.
 */
type PresentationEventName = string;
type EntityArchetype = string;
type HudTextMessageId = string;
type HudTextMessageParam = string;
type HudTextMessageParams = HudTextMessageParam[];
type MessagePriority = number;
type HudEventSequenceId = string;
type DeckOfCards = number[][][];
type AllianceRuleFilter = string;
type TimerName = string;
type Radius = number;
type StatusEffectName = string;
type StatusEffectDurationMultiplier = number;
type TicketType = string;
type Threshold = number;
type TicketName = string;
type ClaimedAreaEntity = SingleEntity;
type TriggerVolumeEntity = SingleEntity;
type TelemetryProperty = string;
type TelemetryValue = string;
type PaddingAmount = number;
type WorldStreamRequestType = string;
type WorldStreamRequestGroup = string;
type ObserverName = string;
type DamageAmount = number;
type DamagePercent = number;
type LogMessage = string;
type LogLevel = number;
type SnippetName = string;
type VillageArchetype = string;
type VillageSize = string;
type StampTextureKey = string;
type StampTextureName = string;
type NumberOfSeconds = number;
type MapKey = string;
type MapKeyValue = string;
type BSharpLabel = string;
type TriggerRange = number;
type MountArchetype = string;
type Distance = number;
type Yaw = number;
type CinematicName = string;
type WeightNum = number;
type AmountRequired = number;
type SliceIndex = number;
type MaxHeight = number;
type MinHeight = number;
type SlotPlacementName = string;
type AudioName = string;
type CardCategory = string;
type CardValue = string;
type GameRuleName = string;
type TestName = string;
type HealthTriggerMode = string;
type HealthDirection = number;
type TriggerEventName = string;
type ExternalEventName = string;
type POITypeName = string;
type CinematicEventName = string;
type CinematicId = number;
type HudEventName = string;
type InvasionActionName = string;
type TimeOfDayNumber = number;
type TimeOfDayName = string;
type TargetAction = string;
type VOSequenceName = string;
