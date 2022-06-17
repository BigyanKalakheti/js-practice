//comparison operator

let num1 = 1
let num2 = 2
let num3 = 3
let str = "1"
let str2 = "100"
let str3 = "abcd"


console.log(str2 + num1); // gives 1001
console.log(str2 - num1);  // gives 99

console.log(parseInt(str3) + num1) //gives Nan

console.log(num1 == num2);
console.log(num1 == str);
console.log(num1===str);

console.log(num1 != num2);
console.log(num1!=str );
console.log(num1 !== str);

console.log(num2>num1);
console.log(num2<num1);
console.log(num2<=num1);
console.log(num2>= num1);

console.log(typeof(str));

//Falsy values
   //  - false
   //  -null
   //  -undefined
   //  -0
   //  - empty String ("")
   // - NaN

let num4 = 5
if (num4 == 0){
    console.log()
}
else if (num1<10) {
    console.log("less than 10");
}
else{
    console.log();
}

let num = 5
switch(num){ //switch check types
    case num == 0:
        console.log("is -0");
        break;
    case num<10:
        console.log("less than 10");
        break;
    default:
        console.log("the end"); 
        break;

}


var num11 = 1; // global variable
let num12 = 2; // global variable
if (true){
    var num11 = 1111 // var makes the global variable
    let num12 = 222 //  let makes block scope variable
}
console .log (num11 , num12 )


// FUNCTION
function sum(){
    console.log("inside sum function")

}

sum()

let a  = 1
let b =  2
function sum2(a,b){
    let c= a+b
    console.log(c);
    return  c
}
let d = sum2(a,b);
console.log(d+1);
