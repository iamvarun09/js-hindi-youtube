
let age=33;
if(age>=18){
    console.log("you are an adult")
}
else{
    console.log("you are not an adult")
}

let fruit="mango"

if (fruit=="apple"){
    console.log("used by all")
}
else if(fruit=="mango"){
    console.log("king of fruit")
}
else{
    console.log("all seasoned fruits")
}

let month="september"

switch(month){

 case "january":
    console.log("1st month")
    break

 case "february":
    console.log("second month")
    break
    
 case "march":
    console.log("3rd month")
    break
    
 case "april":
    console.log("4th month")
    break
    
 case "may":
    console.log("5th month")
    break
    
 case "september":
    console.log("most weirdest month")
    break

 default:
    console.log("it might be 6th or 7th or 8th month")    

}
for(let i=0;i<10;i++){

    console.log(i);

}

//break
for(let i=0;i<10;i++){
    if(i===5)
        break

    console.log(i)
}

for(let i=0;i<10;i++){

    console.log(i)
    if(i===5)
        break
}

//continue
for(let i=11;i<20;i++){
    if (i===14){
     continue
    }
    console.log(i)
}


for(let i=11;i<20;i++){
    console.log(i)
    if(i===14)
        continue
}

//while loop
let i=0
while(i!=20){
    console.log(i*2)
    i=i+2
}


//do while

let val=1;
let j=2;

do{
  console.log(val*j)
  val++;

}while(val!=10)

//higher order array loops
//for of
  arr=["mango","litchee","guava","pineapple"]  
  for(const key of arr){
        console.log(key)
  }

  const map=new Map();

  map.set("In",'india')
  map.set("fr","france")
  map.set("ger",'Gemany')

  for(const i of map){
    console.log(i);
  }
for(const [key,value] of map){
    console.log(key,value)
}
    //for in
const my_obj={
    "name":"varundora",
    "roll-no":"71",
    "city":"bbsr"

}
for(let i in my_obj){
    console.log(i)
}

for(let i in my_obj){
   console.log(my_obj[i])
}

//for in  in case of array

myarr2=[20,30,40,90]

for(let key in myarr2){
    console.log(key)
}
for(let key in myarr2){
    console.log(myarr2[key])
}

//for each
const coding=["ram","shyam","madhav","vasudev"]

coding.forEach(function(item){                 //callback function no name
     console.log(item)
})

coding.forEach((item)=>{
   console.log(item)
})

const coding2=[13,15,19,21,35]
coding2.forEach((i)=>{
   if(i>15)
    console.log(i)


})





