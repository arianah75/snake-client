const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //have to defiene handleUserInput function first before calling stdin.on to listen.
  const handleUserInput = function(key) {
    if (key === "\u0003") {
      // check for CTRL+C input
      process.exit();
    }
  };

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };
