const os = require ("os");

// 1. Host and Platform

// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.arch());

// 2.Uptime 

// console.log(os.uptime());
// console.log(Math.floor(os.uptime()));

// Memory

// console.log(os.totalmem());
// console.log(os.freemem());

// User Info

//  console.log(os.userInfo());

// Home dir 

console.log(os.homedir());

console.log(`OS Version: ${os.version()}`);

console.log(os.userInfo());


console.log(os.cpus());

console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Hostname: ${os.hostname()}`);
console.log( `Totalmem: ${os.totalmem()}`);
console.log( `Freemem : ${os.freemem()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`CPU Details: ${os.cpus()[1]}`);




console.log(`Temporary Directory: ${os.tmpdir()}`);





console.log(os.networkInterfaces());
