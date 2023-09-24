
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [
        {
          username: 'user1',
          password: 'password1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'user2',
          password: 'password2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more user data as needed
      ], {});
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});
    }
  };
  