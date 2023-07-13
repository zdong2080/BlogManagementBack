const { expect } = require('chai');
const { client,connect, close} = require('../../configuration/mongoDB.js');
const { createUserInstance, getUserByEmail } = require('./userCRUD.js');

describe('User CRUD Operations', () => {
  describe('createUserInstance', () => {
    it('should create a user instance with the provided user_id and email', async () => {
      // Test data
      const user_id = 'user123';
      const email = 'user@example.com';

      // Call the function and assert the result
      const result = await createUserInstance(user_id, email);
      console.log(result);
      expect(result).to.exist;
      expect(result.insertedCount).to.equal(1);
    });
  });

  describe('getUserByEmail', () => {
    it('should retrieve a user instance by the provided email', async () => {
      // Test data
      const email = 'user@example.com';

      // Call the function and assert the result
      const user = await getUserByEmail(email);
      expect(user).to.exist;
      expect(user.email).to.equal(email);
    });

    it('should return null when the provided email does not exist', async () => {
      // Test data
      const email = 'nonexistent@example.com';

      // Call the function and assert the result
      const user = await getUserByEmail(email);
      expect(user).to.be.null;
    });
  });
});
