
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






