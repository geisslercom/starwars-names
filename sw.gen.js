$geek = function(config , all){
	this.config = config || {
		apiUrl : "http://localhost:3000/",
		paths : {
			name : "name",
			type: "sw"
		}
	};
	if (all) {this.fill()};
};
$geek.prototype.get = function(type ,path){
	var req = new XMLHttpRequest();
	req.open('GET' , this.config.apiUrl + path + '/' + type, false);
	req.send();
	return JSON.parse(req.responseText);
};
$geek.prototype.fill = function(type){
	var data = this.get( type || 'sw' , 'names');
	for(var i = 0; i < el.length; i++){
		el[i].value = $sw.get('name').name;
	}
	console.log(data);
};


module.exports = $geek;