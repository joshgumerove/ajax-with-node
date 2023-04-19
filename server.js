let http = require("http");
let itemArray = ["burger", "pizza", "milk", "coke"];

http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
    });

    let path = request.url;

    if (path !== "/") {
      let item = path.slice(1);
      if (itemArray.includes(item)) {
        response.end(`we have a ${item} in stock`);
      } else {
        response.end(`we do not have a ${item} in stock`);
      }
    } else {
      response.end("Please Type something");
    }
  })
  .listen(5000);

// response is what is sent back to browser
