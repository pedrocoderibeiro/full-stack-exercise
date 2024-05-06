import http from "http";
import app from "./app";
import { config } from "./config";

const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
