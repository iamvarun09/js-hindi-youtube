
let fun1=function add(a,b){

 c=a+b
 
 return c


}
//add(2,3) not possible because this is already assigned to a variable
//fun1(2,3)

console.log(fun1(2,3))


function add3(n1,n2,n3){

  
    return n1+n2+n3




}

console.log(add3(1,3,4))


function loginuser(username){

  return `${username} hello there just logged in `


}

console.log(loginuser("varun"))

console.log(loginuser())


function user_login(username){
        if(username===undefined)
                return "please give a valid username"
        return "so u just looged in,"+username


}
//user_login("hitesh")
console.log(user_login("harry"))

function calculateprice(...num1){
    return num1
}
console.log(calculateprice(120,130,150))


const user={
  name:"hitesh",
  price:199,

}
function handleobject(anyobject){
   
    console.log(`heelo ${anyobject.name}`)

}
console.log(handleobject(user))
handleobject(user)

//function handleobject2({ name:"hitezh",

  //price:99,}){
   
  //console.log("heelo "+name)

//}


const user2={
  username:"hitesh",

  price:990,

  welcomemsg:function(){
    console.log(`${this.username} welcome to website`)
    console.log(this)

  }


}
user2.welcomemsg()
user2.username='sam'
user2.welcomemsg()

const chai=function(){
  username="varun"
  console.log(`heelo ${this.username} gd m`)
}
chai()


const chai2=(n1,n2)=>{
    return n1+n2
};
console.log(chai2(1,5))

const chai3=(n1,n2)=>(n1+n2);

console.log(chai3(3,9))

//const chai4=(n1,n2)=> n1+n2//no return statement needed it returns automatically

//const add=()=>({name:"varun"})

(function chai6(){
  console.log("DB CONNECTED")
})();

((n1,n2)=>(n1*n2))(9,3)


