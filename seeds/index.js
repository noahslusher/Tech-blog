const sequelize = require('../config/connection');
const postSeeds = require('./post-seeds');
const userSeeds = require('./user-seeds');
const commentSeeds = require('./comment-seeds')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await userSeeds();
  
  await postSeeds();

  await commentSeeds();

  process.exit(0);
};

seedAll();