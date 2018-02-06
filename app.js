const pg = require("pg");
const settings = require("./settings"); // settings.json
const famouspeopledb = require('./famous-people-db')

const config = {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
};

const db = new pg.Client(config);

db.connect((err, connection) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  // famouspeopledb.famous(db, process.argv[2], (err, result) => {
  //   console.error(err)
  //   console.log(result)
  // })

  famouspeopledb.findFamous(db, process.argv[2], (err, result) => {
    console.error(err)
    console.log(result)
  })

//   setTimeout(() => {db.end()}, 2000) // We need to wait queries to be done
//                                      // before closing the connection.
//                                      // I *promise* there's a better way to
//                                      // do this! ;)
})

