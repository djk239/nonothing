const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'corydale18$',
    database: 'temp',
  });
  
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Database connected successfully!');
  });

app.post('/register', (req, res) => {

    const username = req.body.USERNAME
    const password = req.body.PASSWORD



    db.query("INSERT INTO tempusers (username, password) VALUES (?,?)",
     [username, password],
     (err, result) => {
        console.log(err);
    });
}); 

app.listen(3001, () => {
    console.log("running server");
})

