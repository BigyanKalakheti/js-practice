// [a,b,...rest] = [1,2,3,4,5];
// console.log(a,b);
// console.log(rest);

// let obj ={
//     a:1,
//     b:2,
//     c:3,
//     d:4
    
// }
// // let {a,b,...rest} = obj ;
// // console.log(a,b,rest);



// let obj ={
//     a:1,
//     b:2,
//     c:3,
//     d:4
    
// }
// let {a,b,...custom} = obj ;
// console.log(a,b,custom);


// let arr = [1,2,3,4,5];
// console.log(arr.indexof(3));
// console.log(arr.findIndex);(el => el<5)
//escape characters 
//template letral


//synchronus
// line by line

//asynchronus
//call back // a function passed as variable // which is meant to be executed after is preceeding task is completed
//  setTimeout(() => {
   // console.log("i am call back");
    
//  }, 2000);



 console.log(1);
 function callback() {
    console.log("i am call back");
    
 }
 setTimeout(callback,1000) // if time 0 prints at last
 console.log(2);
 console.log(3);


 //promise
//   - pending 
//   - resolve (completed)
//   - reject

let prm = new Promise((resolve , reject) =>{
    //check for conditions
    // if (true){
    //     resolve(true)
    // }
    reject(false)

})
console.log(prm);



