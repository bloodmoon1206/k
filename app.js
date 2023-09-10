function restrt(){
	console.log("gmestrted");
	console.log("hello")
}
function hello(nme,ge){
	console.log("shu minii neriig " + nme);
	console.log("minii ns " + ge);
}
hello("erdene-ochir",23);
hello("bt",15);
hello("suvd",45);
function sum (e,b){
	console.log(e+b);
}
sum(15,20);
sum(56,160);
function too(i,d){
	if(i>d){
		console.log(i);
	}else{
		console.log(d)
	}
}
sum(12,45);
sum(13,760);
var body = document.getElementsByTagName("body")[0];
console.log(body);
var colors = ['brown','aqua','green','blue','yellow'];
random = Math.floor.backgroundColor=colors[i];
var btn =document.getElementsByTagName('button')[0];
var i=-1
function color(){
	random = Math.floor(Math.random()*(colors.length-));
	i++
	body.style.backgroundColor=colors[i];
	btn.innerText = colors[random];
	if(i>=colors.length-1){
		i=-1;
	}
}