
var counter=(function  myCounter() {
var count=0;
return function() {
	return count++;
}
	
}());

console.log(counter());
console.log(counter())