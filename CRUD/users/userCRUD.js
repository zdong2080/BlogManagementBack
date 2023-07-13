const { client,connect, close} = require('../../configuration/mongoDB.js');

// Create a user instance with user_id, email passed from Firebase, and blog_id and name as null

// Create a user instance with the provided user_id and email
let db;
const createUserInstance = async (user_id, email) => {
  try {
    await connect();
    db=client.db('userdb');
    const userInstance = {
      user_id,
      email,
      blog_id: null,
      name: null
    };

    const result = await db.collection('users').insertOne(userInstance);
    return result;
  } catch (error) {
    console.error('Error creating user instance:', error);
    throw error;
  } finally {
    close();
  }
};

// Get a user instance by email
const getUserByEmail = async (email) => {
  try {
    connect();
    db=client.db('userdb');
    const user = await db.collection('users').findOne({ email });
    return user;
  } catch (error) {
    console.error('Error retrieving user by email:', error);
    throw error;
  } finally {
    close();
  }
};


module.exports={createUserInstance,getUserByEmail};

// const user_id = 'user1234';
// const email = 'user@example.com';

// createUserInstance(user_id, email)
//   .then((result) => {
//     console.log('User instance created:', result);

//     // Get the user by email
//     getUserByEmail(email)
//       .then((user) => {
//         console.log('User found by email:', user);
//       })
//       .catch((error) => {
//         console.error('Error retrieving user by email:', error);
//       });
//   })
//   .catch((error) => {
//     console.error('Error creating user instance:', error);
//   });