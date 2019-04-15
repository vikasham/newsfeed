import mysql from 'mysql';

const connection = mysql.createConnection({
  host: "dbinstance.cugdv3txi6k5.us-west-1.rds.amazonaws.com",
  user: "austintraver",
  password: "rootbeer",
  database: "NewsFeed"
})

connection.connect(function(error){
  if (error) throw error;
  console.log("Connected");

});
