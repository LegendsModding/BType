/* --- Communication --- */

/**
 * @constant {FactionActionBuildCommunication}
 * @description Constants for communication build actions.
 */
export const FACTION_BUILD_Communication = {
  default: "build_communication",
  beacon: "build_communication_beacon",
  signal_fire: "build_communication_signal_fire",
  relay: "build_communication_relay",
  tower: "build_communication_tower",
  network: "build_communication_network",
} as const satisfies FactionActionBuildCommunication;
