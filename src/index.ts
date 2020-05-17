import express from "express";

const server = express();

server.get("/", (request, response) => response.json({ hello: "world" }));

server.listen(3333, () => console.log(`Server running port 3333`));

export default server;
