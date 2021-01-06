export default interface GifProvider {
  search: (term: string) => Promise<string[]>;
}
