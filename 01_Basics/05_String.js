const name ="Nilesh"
const repoCount =  50

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Nilesh')

//console.log(gameName[0]);
//console.log(gameName.__proto__);


//console.log(gameName.lenth);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-8,3)
console.log(anotherString);

const newStringOne ="   Nilesh  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url  ="https://nilesh.com/nilesh%20babar"

console.log(url.replace('%20','-'))

console.log(gameName.split('-'));











