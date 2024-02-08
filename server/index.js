const { Server, Socket } = require("socket.io");

const io = new Server(8000,{
    cors:true,
});

const emailTOSocketIdMap = new Map();
const SocketTOemailIdMap = new Map();

io.on("connection",(Socket)=>{
    console.log(`socket connection`, Socket.id);
    Socket.on("room:join", (data)=>{
        const {email,room} = data;
        emailTOSocketIdMap.set(email,Socket.id);
        SocketTOemailIdMap.set(Socket.id,email);
        io.to(room).emit("user:joined",{email,id:Socket.id});
        Socket.join(room);
        io.to(Socket.id).emit("room:join",data);
        // console.log(data);
    });

    Socket.on("user:call", ({ to, offer }) => {
        io.to(to).emit("incomming:call", { from: Socket.id, offer });
      });
    
      Socket.on("call:accepted", ({ to, ans }) => {
        io.to(to).emit("call:accepted", { from: Socket.id, ans });
      });
    
      Socket.on("peer:nego:needed", ({ to, offer }) => {
        console.log("peer:nego:needed", offer);
        io.to(to).emit("peer:nego:needed", { from: Socket.id, offer });
      });
    
      Socket.on("peer:nego:done", ({ to, ans }) => {
        console.log("peer:nego:done", ans);
        io.to(to).emit("peer:nego:final", { from: Socket.id, ans });
      });
});


