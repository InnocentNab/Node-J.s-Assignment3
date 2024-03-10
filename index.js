const http = require("http");

const behaviour = require("./behaviour");

const server = http.createServer(behaviour);

server.listen(3000, () => {
  console.log("server running at port 3000");
});
