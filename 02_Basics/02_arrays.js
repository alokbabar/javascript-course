const marvels_heros =["thor","Ironman","Spiderman"]
const dc_heros = ["Superman","flash","batman"]

//marvels_heros.push(dc_heros)

//console.log(marvels_heros);
//console.log(marvels_heros[3][1]);

//const allHeros = marvels_heros.concat(dc_heros)
//console.log(allHeros);

const all_new_heros =[...dc_heros,...marvels_heros]

//console.log(all_new_heros);

const another_array = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Nilesh"))
console.log(Array.from("Nilesh"))
console.log(Array.from({name: "nilesh"})) // interesting

let score1= 100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));







