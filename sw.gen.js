var $sw;

$sw = {
	apiUrl : "http://localhost:3000/api/",
	paths : {
		name : "name"
	},
	get : function(path){
		var req = new XMLHttpRequest();
		req.open('GET' , $sw.apiUrl + path, false);
		req.send();
		return JSON.parse(req.responseText);
	}
};

$sw.name2value = function(el){
	console.log(el);
	for(var i = 0; i < el.length; i++){
		el[i].value = $sw.get('name').name;
	}
}	
