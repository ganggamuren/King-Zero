
var http = require('http');
var router = require('./router.js')

http.createServer((req,res)=>{
	if(req.url=="/"){
		router.showIndex(req,res)
	}
}).listen(3000)
