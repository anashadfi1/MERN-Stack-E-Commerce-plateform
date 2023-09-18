const bcrypt = require('bcrypt')

const users = [
  {
    name: 'Anas Dev',
    email: 'admin@email.com',
    password: bcrypt.hashSync('anastheadmin', 10),
    isAdmin: true,
  },
  {
    name: 'alphaphilosopher',
    email: 'alphaphilo@email.com',
    password: bcrypt.hashSync('anasthealpha', 10),
  },
  {
    name: 'anas',
    email: 'anas@email.com',
    password: bcrypt.hashSync('anasla111', 10),
  },
];

module.exports = users