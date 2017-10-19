function ajax(method,url,func){
	var ajax1 = "";
	if(window.XMLHttpRequest){
		ajax1 = new XMLHttpRequest();
	}else if(window.ActiveXObject){
		ajax1 = new ActiveXObject("Microsoft.XMLHTTP");
	}
	ajax1.open(method,url,func);
	ajax1.send();
	ajax1.onreadystatechange = function(){
		if(ajax1.readyState == 4 && ajax1.status == 200){
			var data = JSON.parse(ajax1.responseText);
			func(data);
		}
	}
}
var http = require("http");
var qs = require("querystring");
var urls = require("url");
var fs = require("fs");
http.createServer(function(req,res){
	fs.readFile("/H5/H1612A/webA/11 day/day10.json",function(err,data){
		 if(err){
        res.writeHead(404,{"Content-Type":"text/plain;charset=utf-8"})
      }else{
        res.setHeader("Access-Control-Allow-Origin","*");

        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
        res.end(data);
       }
	})
}).listen(8099);
console.log("ok")
