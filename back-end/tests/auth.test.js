process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const { Sequelize } = require('sequelize');
const initUser = require('../models/User');

chai.should();
chai.use(chaiHttp);

describe('Authentication', function() {
  this.timeout(20000); // 20 second timeout

  before(async function() {
    this.sequelize = new Sequelize({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME_TEST || process.env.DB_NAME + '_test',
      logging: false
    });

    this.User = initUser(this.sequelize);
    app.set('models', { User: this.User });

    await this.sequelize.authenticate();
    await this.sequelize.sync({ force: true });
  });

  after(async function() {
    await this.sequelize.close();
  });

  it('should register a user', async function() {
    const res = await chai.request(app)
      .post('/api/auth/register')
      .send({
        first_name: 'Test',
        last_name: 'User',
        email: `test${Date.now()}@example.com`,
        password: 'password123',
        role_id: 2
      });

    res.should.have.status(201);
    res.body.should.have.property('user');
    res.body.user.should.have.property('email');
  });

  it('should fail login with wrong credentials', async function() {
    const res = await chai.request(app)
      .post('/api/auth/login')
      .send({
        email: 'nonexistent@example.com',
        password: 'wrongpassword'
      });

    res.should.have.status(401);
    res.body.should.have.property('error');
  });
});