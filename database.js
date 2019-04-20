import mysql from 'mysql';
import java from 'java';

const connection = mysql.createConnection({
  host: "dbinstance.cugdv3txi6k5.us-west-1.rds.amazonaws.com",
  user: "austintraver",
  password: "rootbeer",
  database: "NewsFeed"
})

connection.connect(function(error){
  if (error) throw error;
  console.log("Connected");

  var select_statement = "SELECT * FROM Users"
  connection.query(select_statement, function (error, result, fields) {
    if (error) throw error;
    console.log(result[0].firstname, result[0].lastname, result[0].username, result[0].password);
  });

  var select_comment = "SELECT * FROM Comments where articleID = ??? ";

  connection.query(select_comment);

  var insert_user = "INSERT INTO Users (username, password, firstname, lastname) VALUES ('optimus','prime','Aaron','Cote'";

  connection.query(insert_user);

  var insert_comment = "INSERT INTO Comments (userID, post) VALUES (???, post)";

  connection.query(insert_comment);

  var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";

)

https://newsapi.org/v2/top-headlines?apiKey=ae32b8b44bde4ae4871588be957c99ad&country=us&category=business
