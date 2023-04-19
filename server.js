let http = require("http");
let itemArray = ["burger", "pizza", "milk", "coke"];

http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
    });
    response.end("Yippee");
  })
  .listen(5000);

// response is what is sent back to browser
