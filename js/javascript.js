console.log('loaded');

//var alive_function = (function() {
//  return function() {}
//})();

//var fruits = (function() {
//  return function(data) {
//    console.log('returned function says: ' + data);
//  };
//})();

//console.log(fruits);

//fruits('banana');


function greeting(message) {
   return function(name){
        return message + ' ' + name;
   }
}

var sayHi = greeting('Hi');
console.log(sayHi);

var sayHello = greeting('Hello');
console.log(sayHello);


console.log(sayHi('John')); // Hi John
console.log(sayHello('John')); // Hello John
