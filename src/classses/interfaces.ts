export interface Commands {
  [command: string]: (args: string[]) => Promise<string[]>;
}
