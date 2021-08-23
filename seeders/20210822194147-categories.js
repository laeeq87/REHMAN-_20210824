'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('categories',[
      { title: 'Exercise', description: 'All the video related to Excercsde, Health & Fitness', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Education', description: 'All the video related to Education, Learning & Personal Grooming', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Recipe', description: 'All the video related to Food', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('categories', null, {});
  }
};
