process.env.NODE_ENV = 'test'; 
const chai = require('chai'); 
const chaiHttp = require('chai-http');
console.log('chaiHttp is:', typeof chaiHttp);

const app = require('../server'); 
const { expect } = chai; 

chai.use(chaiHttp); 

describe('Authentication', () => {
  it('should register a user', (done) => {
    chai.request(app) 
      .post('/api/auth/register')
      .send({
        first_name: 'Test',
        last_name: 'User',
        email: `user${Date.now()}@test.com`, 
        password: 'password123',
        role_id: 2
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('user');
        done();
      });
  });

  it('should fail login with wrong credentials', (done) => {
    chai.request(app) // <-- lowercase
      .post('/api/auth/login')
      .send({
        email: 'nonexistent@test.com',
        password: 'wrongpassword'
      })
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.property('error');
        done();
      });
  });
});
