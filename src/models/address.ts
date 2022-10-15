export class Address {
  street?: string
  city?: string

  constructor(public readonly zipcode: string) {}
}
