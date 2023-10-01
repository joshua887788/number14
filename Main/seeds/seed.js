const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.js');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true, 
    returning: true,
  });

  const users = await User.findAll();

 

  const posts = postData.map(post => ({
    ...post,
    userId: users.find(user => user.username === post.username).id,
  }));

  
  await Post.bulkCreate(posts);

  process.exit(0);
};

seedDatabase();