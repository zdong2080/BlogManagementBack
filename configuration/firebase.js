const admin = require('firebase-admin');

const serviceAccount = require('./blog-ec281-firebase-adminsdk-7lvqr-6f226e11bb.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Other configuration options for your Firebase project
});

console.log('Connected to Firebase');
module.exports={admin, serviceAccount};