const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const filePath = path.join(process.cwd(), 'index.html');
    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error loading index.html');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
};
