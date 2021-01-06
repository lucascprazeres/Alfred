export default interface NewsProvider {
  search: (term: string) => Promise<string[]>;
}
