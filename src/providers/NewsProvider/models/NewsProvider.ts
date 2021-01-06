export default interface NewsProvider {
  search: (term: string, country?: string) => Promise<string[]>;
}
