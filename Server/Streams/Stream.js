let fs = require("fs");

// const readableStream = fs.createReadStream("./X.txt",{
//     encoding: "utf-8",
//     highWaterMark: 1024 
// });

// readableStream.on("data",(chunk)=>{
//     console.log("Received: ",chunk);
// });

// readableStream.on("end",()=>{
//     console.log("Finished");
// });





// let D = fs.createReadStream("./F.txt");
// let F = fs.createReadStream("./X.txt");


//  fs.readFile("./F.txt",(e,d)=>{
//  console.log(d.toString);
//  })



// const fs = require('fs');

const readableStream = fs.createReadStream("./X.txt", "utf-8");

readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readableStream.on('end', () => {
  console.log('Finished reading file.');
});


// const fs = require('fs');

const writableStream = fs.createWriteStream('./X.txt');

writableStream.write('Hello, this is a line.\n');
writableStream.write('This is another line.\n');
writableStream.end(() => {
  console.log('Finished writing to file.');
});
