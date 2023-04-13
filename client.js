const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handler for incoming data
  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  }); //this is an event

  conn.write("Name: ARY"); //what shows on the server

  // conn.write("Move: up");

  return conn;
};

module.exports = { connect };
