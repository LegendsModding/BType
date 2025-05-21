interface BlockClient {
  format_version: string;
  "badger:client_block": Partial<Record<BlockIdentifier, BlockClientConfig>>;
}
