// const fs = require ('fs'); //use file system
// console.log("hello word");// log to the console
// fs.writeFileSync("test.txt", "hello world");// create a filea and write to it
const me =require("http");
const displayContent = require('./routes');
const server = me.createServer(displayContent);
    


server.listen(300);