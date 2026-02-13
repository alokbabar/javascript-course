//var cv =300
let a =300
if(true){
  let a = 10
  const b =20
  //console.log("INNER: ", a);

}


//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "Nilesh"

    function two (){
        const website ="youtube"
        console.log(username);
    }
    //console.log(website);

    //two()
}

//one()

if(true){
    const username ="Nilesh"
    if (username ==="Nilesh"){
        const website =" youtube"
        //console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);

//*******************interesting******************

console.log(addone(5))
function addone (num){
    return num + 1
}


addTwo(5) // it gives error
const addTwo = function(num){
    return num + 2
}

