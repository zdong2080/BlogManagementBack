
const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb+srv://Boyu:M83fkO2qkSeYVuj3@userdata.kfjmsmy.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


let db = null; // Initialize db as null

const connect = async () => {
  try {
    if (!db) {
      await client.connect();
      db = client.db('userdb');
      console.log('Connected successfully to the database');
    }
    return db; // Return the connected db object
  } catch (err) {
    console.error('Error connecting to the database:', err);
    throw err;
  }
};

const close = () => {
  client.close()
    .then(() => {
      console.log('Database connection closed');
    })
    .catch((err) => {
      console.error('Error closing database connection:', err);
    });
};

module.exports = { client,connect, close};

// test connect and close function

// connect()
//   .then(() => {
//     console.log('Database connection test successful');
//   })
//   .catch((err) => {
//     console.error('Error connecting to the database:', err);
//   })
//   .finally(() => {
//     close();
//   });