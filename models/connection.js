var pgp = require('pg-promise')({});

const cn = {
      host: '156.67.217.22',
      port: 5432,
      database: 'test',
      user: 'kusnadi',
      password: 'qweasdzxc'
  };

  var db = pgp(cn);

  module.exports = db;