const axios = require("axios")


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Boyu:M83fkO2qkSeYVuj3@userdata.kfjmsmy.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    //fake firebase response

    
    // axios.get('http://localhost:3000/user')
    // .then(response => {

    // })
    // .catch(error => {
    // console.log(error)
    // })

    // const collection = client.db('userdb').collection('users');
    // const query = {name : "Boyu Li"}
    // const users = await collection.find(query).toArray();
    // console.log();
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


run().catch(console.dir);

