// promise error handling
// let prm = new Promise((resolve,reject) =>{
//     if(false){
//         resolve({id:1 , name :"john"})
//     }
//     reject({data : "server error"})
// })
// prm
//    .then(res =>{
//     console.log((res));
// })
// .catch(err =>{
//     console.log(err);
// })

// try{
//     let a = c+d;
//     console.log(a);

// }
// catch(err){
//     console.log({err});
//     console.log(err.message);

// }
// console.log("response is ....");


// _____event queue , event loop , Calllstack queue ,job queue
console.log(1);
console.log(2);
setTimeout(() => {
    console.log("inside timeout");
    
}, 1000);
pr1 = new Promise((resolve, reject) =>{
    resolve("true from promise")
})  
pr1.then(res =>{
    console.log({res});
})
.catch(err =>{
    console.log({err});
})
console.log(3);
console.log(4);


//task
// console.log("dear sir, subject : javaascript");
// output print subject in new line


//template literals  starts with back tick
subject = "javascript:"
console.log(`dear sir , subject: ${subject}`);


/* alt shift a for multiline comment */


//install git
// make github account
//git and github are different