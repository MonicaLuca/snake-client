let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};


const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    // console.log('up');
    connection.write('Move: up');
  }
  if (key === 's') {
    // console.log('down');
    connection.write('Move: down');
  }
  if (key === 'a') {
    // console.log('left');
    connection.write('Move: left');
  }
  if (key === 'd') {
    // console.log('right');
    connection.write('Move: right');
  }
  if (key === 'h') {
    connection.write('Say: hey');
  }
  if (key === 'j') {
    connection.write('Say: how you doin?');
  }
  if (key === 'k') {
    connection.write('Say: whatsssss up?');
  }
};

module.exports = { setupInput };
