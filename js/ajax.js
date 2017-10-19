function ajax(method,url,func){
	function getHttpRequest(){
		var xhr = "";
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else if(window.ActiveXObject){
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		return xhr
	}
	var xmlHttp = getHttpRequest();
	xmlHttp.open(method,url,true);
	xmlHttp.send();
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			 var data = JSON.parse(xmlHttp.responseText);
			 func(data);
		}
	}
}
