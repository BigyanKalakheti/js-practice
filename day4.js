//function
let num1 =1
let num2 = 2
function sum (value1,value2){
    console.log(value1+value2);
    return value1 + value2
}
sum(num1 , num2)

let summed = sum(1,2)
console.log(summed);

//ARROW FUNCTION
//arrow function declaration
//const calculateDiff = (value1 , value2) => value2 - value1
const calculateDiff = (value1 , value2) => value2 - value1
let diff = calculateDiff(5,10)
console.log("difference = ",diff);
console.log({diff}); //prints i from of object
console.log({diff}); //prints i from of object

const calcDiff = (value1 , value2) => { 
    let value3 =value2 - value1
    return value3
}
let diffe = calcDiff(5,10)
