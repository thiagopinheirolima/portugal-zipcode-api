import app from '../app'
import request from 'supertest'

describe('GET /zipcode', () => {
  it('should return the same param as sent', async () => {
    const zipcode = '123456'
    const { text } = await await request(app).get(`/zipcode/${zipcode}`)
    expect(text).toBe(zipcode)
  })
})
