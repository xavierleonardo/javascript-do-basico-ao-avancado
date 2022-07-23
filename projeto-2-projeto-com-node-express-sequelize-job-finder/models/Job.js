const Sequelize = require('sequelize');
const db = require('../db/connection');

module.exports = db.define('Job', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    default: '',
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    default: '',
  },
  salary: {
    type: Sequelize.STRING,
    allowNull: false,
    default: '',
  },
  company: {
    type: Sequelize.STRING,
    allowNull: false,
    default: '',
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    default: '',
  },
  new_job: {
    type: Sequelize.INTEGER,
    allowNull: false,
    default: 1,
  },
});
