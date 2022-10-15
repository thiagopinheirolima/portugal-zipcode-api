import app from './app'
import request from 'supertest'

describe('GET /zipcode', () => {
  it('should return the same zipcode sent', async () => {
    const zipcode = '1111-111'
    const response = await request(app).get(`/zipcode/${zipcode}`)
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('zipcode')
    expect(response.body.zipcode).toBe(zipcode)
  })

  it('should return error if zipcode sent is invalid', async () => {
    const zipcode = '1111111'
    const response = await request(app).get(`/zipcode/${zipcode}`)
    expect(response.status).toBe(400)
    expect(response.text).toBe('zipcode must be in format "xxxx-xxx"')
  })
})
