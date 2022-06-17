// pass by value //pass by reference
let a = 1
let b = a // pass by value
console.log(a, b);



//pass by reference
let obj = {
    a : 1,
    b : 2
}
// obj.a = " string"
let obj2 = obj ;
console.log(obj," ", obj2);
console.log(obj.a);
obj2.a = "changed"
console.log(obj2.a);


/// pas by reference
let arr = [1,2,3,4]
let arr2 = arr;
console.log(arr, " ", arr2);
arr2[3]= "changed"
console.log(arr2[3]);
console.log(arr[3]);

// pass by reference
// function check(arr){
//     let arr2= arr
//     arr2[3]  = "unchanged"
// }
// check(arr)
// console.log(arr);

function check(arr){
    //spread syntax
    let arr2= [...arr]
    arr2[3]  = "unchanged"
    console.log(arr2);
    let arr3 = [0,...arr]
    console.log(arr3);
}
check(arr)
console.log(arr);

//spread syntax //changes only on one part
let Obj5 = {c:1,d:2}
let Obj6 = {...Obj5};

Obj6.d = 3
console.log(Obj5 , " " , Obj6);


if(true){
    console.log("is true");
}
else{
    console.log(("is false"));
}

//terniary operator
console.log(true? "yes" : "is false");
console.log(true?(false ? "not this time" : "no"): "no");

//loop
//for loop
for (let i = 0; i<=10 ; i++){
    console.log(i);
    if(i==5){break;} // to  terminate loop after some condition
}


// while loop
let j;
while (j<10){
    console.log(j);
    j++


}
let  k= 0;
do{
    console.log(k);
    k++
} while(k<10)


//program
let Arr = [5,4,3,2,1]
for(let m = 0 ;m<Arr.length; m++){
    console.log("index",m,":",Arr[m]);
}
console.log(" ");

let aRR = [1,2,3,4,5]

for(let n =0;n<=aRR.length; n++){
    c= aRR.reverse()
    console.log("index",n,":",c[n]);
}

