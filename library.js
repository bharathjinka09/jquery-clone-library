function  _(selector) {
	let self = document.querySelector(selector)

	self.text = function(){
		return self.innerText
	}
	
	self.setText = function(text){
		if(text){
			self.innerText = text
			return self
		}
			return self.innerText
	}

	self.html = function(){
		return self.innerHTML
	}

	self.css = function (styles){
		for (let key in styles){
			self.style[key] = styles[key]
		}
		return self
	}

	self.on = function(eventName,callback){
		self.addEventListener(eventName, callback);
		return self
	}

	return self
}