var http = require('http'),
    url = require('url'),
    fs=require('fs');

http.createServer(function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	var json = url.parse(req.url,true).query
	fs.writeFile('./用户名.txt',json.user+json.pass,function(err){
		if(err) throw err;
		console.log('写入成功');
		
	})
	fs.readFile('./用户名.txt','utf-8',function(err,data){
			if (err) throw err;
			console.log(data)
	fs.writeFile('./index2.html','用户名：'+json.user+'密码:'+json.pass,function(err){
		if(err) throw err;
		console.log('写入成功');
		
	})
	})
	
	
	res.end();
	

}).listen(8080)


	

