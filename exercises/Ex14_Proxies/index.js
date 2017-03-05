var target = function () {
  return 'You killed my father!';
};
console.log(target());

/*
 let spoilerProxy = ...;
 // TODO: create a proxy called addSpoiler which adds the Spoiler "No, I am your father" at the end of the string.
 console.log(spoilerProxy());
 */

var object = {};
var loggingHandler = {};
// TODO: add logging functions to set and get operations. print out the property name, the value und the operation (get, set)

var loggedObject = new Proxy(object, loggingHandler);

loggedObject.a = 'this is a';
loggedObject.b = 100;
loggedObject.c = function () {
  return 'this is c';
};

console.log(loggedObject.a);
console.log(loggedObject.b);
console.log(loggedObject.c);
console.log(loggedObject.c());