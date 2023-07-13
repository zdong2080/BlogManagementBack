const {admin, serviceAccount} = require('../configuration/firebase.js');
const bcrypt = require('bcrypt');

const auth = admin.auth();

async function handleSignIn(email, password) {
  try {
    const userRecord = await auth.getUserByEmail(email);
    const hashedPassword = userRecord.customClaims.passwordHash; // Assuming password hash is stored in custom claim
    console.log('1',hashedPassword);
    const match = await bcrypt.compare(password, hashedPassword);

    if (match) {
      // Authentication successful
      return { success: true };
    } else {
      // Authentication failed
      throw new Error('Invalid email or password');
    }
  } catch (error) {
    // Handle errors
    throw error;
  }
}

module.exports = handleSignIn;