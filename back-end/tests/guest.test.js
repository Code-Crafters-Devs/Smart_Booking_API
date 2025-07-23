describe('Guest API', () => {
  let guestToken;

  before(async () => {
    // Login as guest
    const res = await chai.request(app)
      .post('/api/auth/login')
      .send({
        email: 'guest@test.com',
        password: 'password123'
      });
    guestToken = res.body.token;
  });

  it('should get guest profile', async () => {
    const res = await chai.request(app)
      .get('/api/guest/profile')
      .set('Authorization', `Bearer ${guestToken}`);
    
    expect(res).to.have.status(200);
    expect(res.body).to.have.property('user');
  });

  it('should prevent guests from admin routes', async () => {
    const res = await chai.request(app)
      .get('/api/admin/users')
      .set('Authorization', `Bearer ${guestToken}`);
    
    expect(res).to.have.status(403);
  });
});