import http from "http";
import { handler } from "./connect.js";

const PORT = process.env.PORT || 5004;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept, Connect-Protocol-Version, Connect-Timeout-Ms, Grpc-Timeout, X-Grpc-Web, X-User-Agent",
  "Access-Control-Expose-Headers": "Grpc-Status, Grpc-Message, Grpc-Status-Details-Bin",
  "Access-Control-Max-Age": "7200",
};

const STATUS_PATH = "/status";

const server = http.createServer((req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, corsHeaders);
    res.end();
    return;
  }
  if (req.method === "GET" && req.url === STATUS_PATH) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "healthy" }));
    return;
  }
  Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
  handler(req, res);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`gRPC-Web Energy Price Service listening on http://0.0.0.0:${PORT}`);
  console.log(`  - Status:      GET  http://localhost:${PORT}/status`);
  console.log(`  - Connect:     POST http://localhost:${PORT}/energyprice.PriceService/GetPrice`);
  console.log(`  - gRPC-Web:    POST http://localhost:${PORT}/energyprice.PriceService/GetPrice`);
});
