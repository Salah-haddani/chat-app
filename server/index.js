import express from "express";
import http from "http";
import cors from "cors";
import { Server, Socket } from "socket.io";

const app = express();
const port = 3001;
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
})

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    })
})

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
