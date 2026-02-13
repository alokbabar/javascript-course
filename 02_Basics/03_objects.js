// Singleton
// Object literals

const mySym = Symbol("key1")

const JsUser ={
    name: "Nilesh",
    "full name" :"Nilesh Babar",
    [mySym]: "mykey1",
    age: 21,
    location:"Baramati",
    email:"nilesh@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])

JsUser.email ="nilesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email ="nilesh@microsoft.com"
//console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello JS user");
}
JsUser.greeting = function() {
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greeting());











