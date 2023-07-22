

const express = require('express');
const app = express();
const userRouter = require('./router/userRouter.js');
const { connect } = require('./configuration/mongoDB.js');

app.use(express.json());

// Mount the user router
app.use('/users', userRouter);

// Connect to the MongoDB server when the app starts
connect().then(() => {
  const port = 3001; // Choose any available port
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err) => {
  console.error('Error connecting to the database:', err);
  process.exit(1); // Exit the app if there's an error in the database connection
});







