/*const os = require('os');


console.log(os.platform());
console.log(os.release());
console.log('free men: ', os.freemem(), 'bytes');
console.log('Total men', os.totalmem(), 'bytes');
*/


// const fs = require('fs')

// fs.writeFile('./texto.txt', 'linea uno', function(err) {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Archivo creado');
// });

// console.log('ultima linea de codigo');



//CODIGO ASINCRONO CODIGO NO BLOQUEANTE//

// const fs = require('fs');

// fs.readFile('./texto.txt', function(err, data) {
//         if (err) {
//             console.log(err);

//         }
//         console.log(data.toString());


//     }

// )







///Modulo Mi Servidor



const http = require('http')

http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1> Hola Mundo</h1>');
    res.end();
    //Puerto 3000
}).listen(3000);