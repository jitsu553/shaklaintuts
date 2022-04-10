const express = require('express')
var bodyParser = require('body-parser')

const { Pool, Client } = require('pg');

const connectionString = 'postgresql://postgres:passpass@localhost:5432/tutorial';


const app = express()
const port = 3000;


const client = new Client({
  connectionString,
})
	client.connect();



app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({msg:'Hello World!'})
})

app.get('/getnames', (req, res) => {


	client.query(`SELECT * from testing where name = $1`,[req.query.name], (err, res1) => {
	  console.log(err, res1.rows)
	  //client.end()
	  //console.log(req.query)
  		res.json({msg:res1.rows})
	});
});

app.post('/getnamespost', (req, res) => {
	//console.log(req.query)
	console.log(req.body)
  	res.json({msg:`Hello ${req.body.name} ${req.body.surname} !`})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})