const knex = require('knex');
const knexConfig = require('./knexfile');

// Sử dụng cấu hình cho môi trường hiện tại (development, production, etc.)
const db = knex(knexConfig.development);  // Sử dụng cấu hình cho môi trường development

db.raw('SELECT 1')
  .then(() => {
    console.log('Connected to database');
  })
  .catch(err => {
    console.error('Error connecting to database:', err);
  });

module.exports = db;
