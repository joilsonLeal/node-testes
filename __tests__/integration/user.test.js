import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Diego Fernandes',
        email: 'fernandes@gmail.com',
        password_hash: '8712381623',
      });

    expect(response.body).toHaveProperty('id');

  });
});