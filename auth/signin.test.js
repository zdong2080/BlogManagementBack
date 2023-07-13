const handleSignIn = require('./signin.js');
const chai = require('chai');
const expect = chai.expect;

describe('Sign In', function () {
  it('should sign in a user with valid credentials', function () {
    const email = 'liboyu1999@tamu.edu';
    const password = '123456';

    return handleSignIn(email, password)
      .then((userCredential) => {
        expect(userCredential).to.exist;
        expect(userCredential.user).to.exist;
        expect(userCredential.user.email).to.equal(email);
      });
  });

  it('should fail to sign in with invalid credentials', function () {
    const email = 'zdong2080@gmail.com';
    const password = '123456';

    return handleSignIn(email, password)
      .catch((error) => {
        expect(error.code).to.equal('auth/wrong-password');
      });
  });
});
