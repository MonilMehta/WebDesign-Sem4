import http from 'http';
import fs from 'fs';
import url from 'url';

const server = http.createServer((req, res) => {
    console.log('Server started');

    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            console.log('File not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('Hello Monil! <br><br>');
            res.end();
        }
    });
});
server.listen(8080, () => {
    console.log('Server listening on http://localhost:8080/');
});
