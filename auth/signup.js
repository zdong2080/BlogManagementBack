const {admin, serviceAccount} = require('../configuration/firebase.js');

const auth = admin.auth();

function handleSignup(email, password) {
  return auth.createUser({
    email: email,
    password: password
  });
}

module.exports = handleSignup;
