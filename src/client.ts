import WebSocket from "ws";
import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";

const ws = new WebSocket("ws://localhost:3000/");
const rl = createInterface({
	input: stdin,
	output: stdout,
});

ws.on("open", () => {
	console.log("Conectado ao servidor WebSocket!");
});

rl.on("line", (line) => {
	ws.send(line);
});

rl.on("close", () => {
	console.log("Readline interface closed. Exiting.");
	process.exit(0);
});

ws.on("message", (data: WebSocket.RawData) => {
	console.log("Mensagem recebida:", data.toString());
});

ws.on("error", (err) => {
	console.error("❌ Erro na conexão:", err);
	process.exit(1);
});

ws.on("close", () => {
	console.log("🔌 Conexão encerrada");
	process.exit(0);
});
