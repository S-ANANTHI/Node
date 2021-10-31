const http=require('http');
http.createServer(function(req,res) 
{
res.writeHead(200,{'Content-Type':'text/html'});
res.write('<h1><center>Node JS Assessment 1</center></h1>');
res.write('<h2><center>Ananthi</center></h2>');
res.end();
}).listen(9001);
console.log('Server is running on the port over 9001');