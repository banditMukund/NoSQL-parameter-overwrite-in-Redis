//const redis = require('redis');
//const client = redis.createClient();

var http = require('http');
var fs = require('fs');
var url = require('url');

const bodyParser = require("body-parser");
const request = require("request");
const path = require("path");
const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();


//(async () => {
//    await client.connect();
//})();

//client.connect();

console.log("Node app running")

//client.on('ready', () => {
//  console.log('Connected!');
//});

//client.on('error', (err) => {
//	console.log("Error " +err);
//});

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'))
app.use("/js", express.static(path.join(__dirname, '/resources/templates/js')));


/*http.createServer(onRequest).listen(8888);
console.log("Server has started");*/

/*function onRequest(request, response)
{
  if(request.url == '/')
  {
	response.writeHead(200);
  	response.write('Hello Noders');
  	response.end();
  }
  else if(request.url == '/home')
  {
  	console.log(__dirname);
  	response.sendFile(__dirname+"/home.html");
  }
}*/

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
  res.send("Welcome to the website");
});

app.get("/home", (req, res) => {
	//console.log(res);
  res.sendFile(__dirname + "/resources/templates/html/"+"home.html");
});

app.get("/login", (req, res) => {
   res.sendFile(__dirname + "/resources/templates/html/"+"login.html");
});


require("./controllers/logincontroller.js")(app);
require("./controllers/homecontroller.js")(app);









