const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const { User } = require('../../src/models');
const { sequelize } = require('../../src/config/database');

chai.use(chaiHttp);
const { expect } = chai;

describe('Auth Controller', () => {
  before(async () => {
    await sequelize.sync({ force: true });
  });

  describe('POST /auth/register', () => {
    it('should register a new user', async () => {
      const res = await chai.request(app)
        .post('/api/auth/register')
        .send({
          email: 'test@example.com',
          password: 'password123',
          first_name: 'Test',
          last_name: 'User',
          role: 'guest'
        });

      expect(res).to.have.status(201);
      expect(res.body).to.have.property('id');
      expect(res.body.email).to.equal('test@example.com');
    });

    it('should not register with duplicate email', async () => {
      const res = await chai.request(app)
        .post('/api/auth/register')
        .send({
          email: 'test@example.com',
          password: 'password123',
          first_name: 'Test',
          last_name: 'User',
          role: 'guest'
        });

      expect(res).to.have.status(409);
      expect(res.body.error).to.equal('Email already in use');
    });
  });

  describe('POST /auth/login', () => {
    it('should login with valid credentials', async () => {
      const res = await chai.request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@example.com',
          password: 'password123'
        });

      expect(res).to.have.status(200);
      expect(res.body).to.have.property('token');
      expect(res.body.user.email).to.equal('test@example.com');
    });

    it('should not login with invalid credentials', async () => {
      const res = await chai.request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@example.com',
          password: 'wrongpassword'
        });

      expect(res).to.have.status(401);
      expect(res.body.error).to.equal('Invalid credentials');
    });
  });
});