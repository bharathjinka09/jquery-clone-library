console.log(_('#app').text());

console.log(_('#app').setText('Hello World').text());

console.log(_('#app').html());

console.log(_('#app').css({
	fontSize:"50px",
	color:"red"
}).text());


console.log(_("#app").on('click',function(){
	console.log('clicked',_('#app').text());
}).text());