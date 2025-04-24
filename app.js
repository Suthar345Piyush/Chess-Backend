const express = require("express");
const socket = require("socket.io");
const http = require("http");
const { Chess } = require("chess.js");
const path = require("path");
const { title } = require("process");


const app = express();
const server = http.createServer(app);

const io = socket(server);


const chess = new Chess();
let players  = {};
let currentPlayers = "W";

app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname , "public")));

app.get("/" , (req , res) => {
  res.render("index" , { title :"Welcome to Chess Game" });
});


io.on("connection" , function(uniqueSocket) {
  console.log("Socket io is  connected");

  uniqueSocket.on("Hello working with sockets" , function () {
    console.log("Hello received");
  });
});





server.listen(3000 , function () {
  console.log("Server started on PORT 3000");
})