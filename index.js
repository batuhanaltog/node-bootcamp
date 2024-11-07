const fs = require('fs'); //file system let us to read files CTRL+CMD+SPACE TO EMOJI BAR OPEN
const http = require('http');
const path = require('path');
const url = require('url')
////////////////////////////////////////////////
// FILES
//blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8'); //sync stands for synchronise
// console.log(textIn)
// const textout = `This is what we know about avacado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textout);
// console.log('File written!')
// //non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log("data2", data2)
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//             console.log("data3",data3)
//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log("your file has been written 😅");
//             })
//         });
//     });
// });
// console.log("will read file..")

///////////////////////////////////////////////
//SERVER
const server = http.createServer((req, res) => {
    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview'){
        res.end('This is the overview');
    } else if (pathName === '/product'){
        res.end('This is product');
    }else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000');
});