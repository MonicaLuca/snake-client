const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });

  conn.on('connect', () => {
    conn.write('Name: MJL');
    // conn.write('Move: up');
    // setInterval(function(){conn.write('Move: left');}, 50);
    //conn.write('Move: left');
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};


module.exports = { connect };