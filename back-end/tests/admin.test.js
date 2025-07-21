describe('Admin API', () => {
  let adminToken;

  before(async () => {
    // Login as admin
    const res = await chai.request(app)
      .post('/api/auth/login')
      .send({
        email: 'admin@test.com',
        password: 'password123'
      });
    adminToken = res.body.token;
  });

  it('should get all users', async () => {
    const res = await chai.request(app)
      .get('/api/admin/users')
      .set('Authorization', `Bearer ${adminToken}`);
    
    expect(res).to.have.status(200);
    expect(res.body).to.be.an('array');
  });

  it('should manage users', async () => {
    const testUser = await User.create({ /* ... */ });
    
    const res = await chai.request(app)
      .put(`/api/admin/users/${testUser.id}`)
      .set('Authorization', `Bearer ${adminToken}`)
      .send({ is_active: false });
    
    expect(res).to.have.status(200);
    expect(res.body.is_active).to.be.false;
  });
});