const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const query =
  `SELECT
      *
    FROM famous_people
    WHERE last_name = '${process.argv[2]}'
    `;


client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows); //output: 1
    client.end();
  });
});