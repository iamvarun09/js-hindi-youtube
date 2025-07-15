
console.log(Array.isArray("hitesh"))

console.log(Array.from("hitesh"))

let score1=100

let score2=200

let score3=300

console.log(Array.of(score1,score2,score3))

//Object.create

const myobj={
  
  name:"varundora",
  email_id:"varundora0904@gmail.com",
  age:21,

}

console.log(myobj.name)
console.log(myobj['name'])

console.log(myobj.email_id)
console.log(myobj['email_id'])

console.log(myobj.age)
console.log(myobj['age'])

myobj.email_id="leosipra@gmail.com"
console.log(myobj.email_id)

const mysymbol="key1"

const myobj2={

    ['mysymbol']:"key090",
    name:"varundora",
}
console.log(myobj2)

//Object.freeze(variable name)

myobj2.greetings=function(){
    console.log("hello js varun this side")
}

console.log(myobj2.greetings)
console.log(myobj2.greetings())

myobj2.greetings2=function(){

    console.log(`hello,${this.name}`)
}
console.log(myobj2.greetings2)
console.log(myobj2.greetings2())

const newtinder=new Object() //singleton way

//const mytinder={}  non singleton literal way

newtinder.name="viratkohli"

newtinder.age=36

newtinder.email="viratkohli18@gmail.com"

console.log(newtinder)

const myobj3={

     name:{
        firstname:'varundora',
     },

}

console.log(myobj3.name)
console.log(myobj3.name.firstname)


const myobj4={
    1:"a",
    2:"b",
   }
const myobj5={
    3:"c",
    4:"d",
}

const myobj6={...myobj4,...myobj5}
console.log(myobj6)