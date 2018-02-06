const settings = require("./settings");

var knex = require('knex')({
  client: 'postgres',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});



// knex('famous_people').where('last_name', ${process.argv}[2])
// Outputs:
// select * from `famous_people` where `last_name` = ${process.argv}[2]

// knex.select('last_name').from('famous_people')
// .where('last_name', ${process.argv}[2])
// .asCallback(function(err, rows) {
//   if (err)  {
//     return console.error(err);
//     }
//       console.log(rows);
//     });
// });


knex.select().from('famous_people')
.asCallback(function(err, rows) {
  if (err)  {
    return console.error(err);
    }
      console.log(rows);
      knex.destroy();
});