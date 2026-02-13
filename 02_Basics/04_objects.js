//const tinderUser =new Object()
const tinderUser ={}

tinderUser.id ="123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser ={
     email: "Soham@gmail.com",
     fullname:{
        userfullname:{
            firstname:"nilesh",
            lastname:"babar"
        }
     }
}

//console.log(regularUser.fullname.userfullname.firstname);

const Obj1 ={1: "a", 2: "b"}
const Obj2 ={3: "a", 4: "b"}
const Obj4 ={5: "a", 6: "b"}

//const Obj3 ={Obj1,Obj2}
//const Obj3= Object.assign({},Obj1,Obj2,Obj4)

const Obj3 ={...Obj1, ...Obj2}
//console.log(Obj3);

const users =[  
    {
        id: 1,
        email: "n@gmail.com"        
    },
     {
        id: 1,
        email: "n@gmail.com"        
    },
     {
        id: 1,
        email: "n@gmail.com"        
    }
]

users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));


//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
    coursename: "js in hindi",
    price: "1000",
    courseInstructor: "Nilesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

//{
//    "name": "Nilesh",
//    "coursename": "js in hindi",
//    "price": "free"
//}

[
    {},
    {},
    {}
]
