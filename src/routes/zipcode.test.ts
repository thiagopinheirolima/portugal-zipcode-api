import app from '../app'
import request from 'supertest'

describe('GET /zipcode', () => {
  it('should return the same param as sent', async () => {
    const zipcode = '123456'
    const { body } = await await request(app).get(`/zipcode/${zipcode}`)
    expect(body.zipcode).toBe(zipcode)
  })
})
