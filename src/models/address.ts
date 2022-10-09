export class Address {
  zipcode: String
  street?: String
  city?: String

  constructor(zipcode: String) {
    this.zipcode = zipcode
  }
}
