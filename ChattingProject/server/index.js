const { Server } = require("socket.io");


const io = new Server(8000, {
    cors: true,
});
io.on("connection", socket=>{
    console.log("connection successful", socket.id)
});