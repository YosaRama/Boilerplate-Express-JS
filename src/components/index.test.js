import app from 'app';
import supertest from 'supertest';

const agent = supertest(app);
const rootUrl = '/';

describe('GET /', () => {
  test('should return 200', (done) => {
    agent
      .get(rootUrl)
      .expect(200)
      .expect((res) => {
        res.body.ping === 'pong';
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
