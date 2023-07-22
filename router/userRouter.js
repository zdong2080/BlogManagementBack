const express = require('express');
const router = express.Router();
const { createUserInstance, getUserByEmail } = require('.././CRUD/users/userCRUD.js');

// Create a new user instance
router.post('/', async (req, res) => {
  const { user_id, email } = req.body;
  try {
    const result = await createUserInstance(user_id, email);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a user instance by email
router.get('/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
