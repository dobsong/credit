export class GlossaryDefinition {
  id: number
  term: string
  definition: string
  url?: string

  constructor(id: number, term: string, definition: string, url: string) {
    this.id = id
    this.term = term
    this.definition = definition
    this.url = url
  }
}
