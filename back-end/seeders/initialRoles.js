module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Roles', [
      { id: 1, name: 'provider' },
      { id: 2, name: 'guest' },
      { id: 3, name: 'admin' }
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};