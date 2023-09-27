const express = require ('express');
const app = express ();
const mysql = require ('mysql2');
const cors = require ('cors');
const {response} = require ('express');

app.use (cors ());
app.use (express.json ());

const db = mysql.createConnection ({
  user: 'root',
  host: 'localhost',
  password: 'root',
  database: 'employee_system',
});

app.delete ('/delete/:id', (req, res) => {
  const id = req.params.id;

  db.query (
    'DELETE FROM EMPLOYEES WHERE idemployees = ?',
    id,
    (err, result) => {
      if (err) {
        console.log (err);
      } else {
        res.send (result);
      }
    }
  );
});

app.put ('/update', (req, res) => {
  const wage = req.body.newWage;
  const id = req.body.id;

  db.query (
    'UPDATE EMPLOYEES SET WAGE = ? WHERE idemployees = ?',
    [wage, id],
    (err, result) => {
      if (err) {
        console.log (err);
      } else {
        res.send (result);
      }
    }
  );
});

app.get ('/employees', (req, res) => {
  db.query ('SELECT * FROM EMPLOYEES', (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.send (JSON.stringify (result));
    }
  });
});

app.post ('/create', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query (
    'INSERT INTO EMPLOYEES (name, age, country, position, wage) VALUES (?,?,?,?,?)',
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log (err);
      } else {
        res.send ('Values inserted');
      }
    }
  );
});

app.listen (3001, () => {
  console.log ('Server started succesfully on port 3001.');
});
