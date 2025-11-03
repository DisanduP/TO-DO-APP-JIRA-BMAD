const sirv = require('sirv');
const http = require('http');
const path = require('path');

const serve = sirv(path.join(__dirname), { single: true, dev: true });
const server = http.createServer((req, res) => serve(req, res));
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`BMAD Todo app listening on http://localhost:${port}`));
