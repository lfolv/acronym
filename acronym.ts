export default class Acronym {
  public static parse(phrase: string): string {
    return phrase.replace(/([a-zA-Z][a-z]+|[A-Z]+)[\s,:]*/g,
      match => match[0].toUpperCase()
    )
  }
}
