const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const handleSignup = require('./signup');


describe('Signup', function () {
  it('should create a new user', function () {
    const email = 'liboyu1999@tamu.edu';
    const password = '123456';

    return handleSignup(email, password)
      .then((userRecord) => {
        expect(userRecord).to.exist;
        expect(userRecord.email).to.equal(email);
      });
  });
});







