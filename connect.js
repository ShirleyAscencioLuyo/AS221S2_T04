var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/'));

var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "db_landing_page"
});

conexion.connect(function (error) {
  if (error) {
    console.log(error)
    throw error;
  } else {
    console.log("Conexión exitosa");
  }
});

const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});

app.post("/api/contactanos", (req, res) => {
	console.log('datos : ', req.body);
	let data = {
    	nomcon: req.body.nombre,
    	corrcon: req.body.correo,
    	asucon: req.body.asunto,
    	descon: req.body.descripcion
	};
	let sql = "INSERT INTO contactanos SET ?";
	conexion.query(sql, data, function (error, results) {
  	if (error) {
    	throw error;
  	} else {
    	console.log(data);
    	res.send(data);
  	}
	});
  });
