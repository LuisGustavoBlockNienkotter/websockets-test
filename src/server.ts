import express from "express";
import expressWs from "express-ws";

const { app } = expressWs(express());
const port = 3000;

app.ws("/", (ws, req) => {
	ws.on("message", function (msg) {
		console.log("Message received:", msg);
		ws.send(msg.toString().toUpperCase());
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
