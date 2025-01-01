const request = require('supertest');
const { app, server } = require('../app');  // Import both app and server

describe('GET /', () => {
  it('should return 200 and expected message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello, CI/CD Pipeline with Jenkins!');
  });
});

// Close the server after all tests
afterAll((done) => {
  server.close(() => {  // Close the server properly
    done();
  });
});
