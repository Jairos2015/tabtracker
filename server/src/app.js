console.log("Hola");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors()) // paquete para Connect/Express midleware

app.get('/status' ,(req,res) => {
	res.send({
		message: 'Hola Mundo 1'
	})
})
/*
app.get('/status' ,function(req,res){
	res.send({
		message: 'Hola Mundo'
	})
})
*/
app.listen(process.env.PORT || 8081) 
