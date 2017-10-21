var http = require("http");
var fs = require("fs")
var urlA = require("url")

http.createServer(function(req,res){
var urlB = urlA.parse(req.url,true).query.abc;
	console.log(urlB)
	res.setHeader("Access-Control-Allow-Origin","*");
	fs.readFile("data/homepage.json",function(err,data){
		if(err){
			res.write("404")
		}else{
			res.writeHead(200,{"Content-Type":"html/text;charset=utf-8;"})
			res.write(urlB+"("+data+")")
		}
			res.end();
		})
	
	
}).listen(8080);
console.log("action")
