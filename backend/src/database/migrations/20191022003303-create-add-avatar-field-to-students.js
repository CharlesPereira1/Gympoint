module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('students', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNulll: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('students', 'avatar_id');
  },
};
