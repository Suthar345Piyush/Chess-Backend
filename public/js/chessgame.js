const socket  = io();


socket.emit("Hello working with sockets");
socket.on("hello received successfully" , function(){
  console.log("hello message received");
});

 