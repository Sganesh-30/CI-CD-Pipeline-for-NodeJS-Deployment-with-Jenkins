const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return 200 and expected message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello, CI/CD Pipeline with Jenkins!');
  });
});

afterAll((done) => {
  app.close();  // Close the server after the tests are done
  done();
});
