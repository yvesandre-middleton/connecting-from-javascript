function findFamous(client, person, callback) {
  const query =
  `SELECT
      *
    FROM famous_people
    WHERE last_name = $1;
    `

   client.query(query, [person],
      (err, result) => {
        if (err) {
          callback(err)
          return
        }
        callback(null, result.rows)
      }
    );
  }

// function famous(client, person, callback) {
//   client.query(
//     "SELECT * FROM famous_people WHERE last_name = $1;",
//     [person],
//     (err, result) => {
//       if (err) {
//         callback(err)
//         return
//       }
//       callback(null, result.rows)
//     }
//   );
// }


module.exports = {
  // famous: famous,
  findFamous: findFamous
}




