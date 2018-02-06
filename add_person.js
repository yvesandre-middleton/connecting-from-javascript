const settings = require("./settings");

var knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

knex('famous_people').insert({first_name: 'Albert', last_name: 'Einstein', birthdate: '1879-03-14'}).asCallback()








