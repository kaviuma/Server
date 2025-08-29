let path = require ( "path")


// console.log(__dirname);
// console.log(__filename);

//  console.log(path.join(__dirname,"URL","Url.txt"));
//console.log(path.resolve("OS","os.txt"));
// console.log(path.extname(path.join(__dirname,"HTML","Os.html")));
//console.log(path.extname("Path1.js"));


// console.log(path.parse(path.join(__dirname,"URL","Url.txt")));

//console.log(path.parse("Path1.txt"));

 console.log(path.format(path.parse(path.join(__dirname,"HTML","Os.html"))));
 
// console.log(path.join(__dirname,"URL",".."));