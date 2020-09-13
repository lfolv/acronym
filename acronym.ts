export default class Acronym {
  public static parse(phrase: string): string {
    return phrase.replace(/\w+\s?/g,
      match => match[0].toUpperCase()
    )
  }
}
