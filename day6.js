
//rest syntax //see for your self



//task
 let arr7 = [5,4,3,2,1]
 arr7.forEach((element , index) =>{
    console.log(arr7[index]);
   })
 


//array methods
    // array.forEach(   => { }) // for loops for array
    // push
    // pop
    // unshift
    // shift
    // splice(a,b) //removes from between selectively
    // slice //returns new array
    // filter // applies for loop
    // ap modifiy element



let arr = [1,2]
//  arr = [...arr,3]
// console.log(arr);
arr.push(3) //adds on last
arr.unshift(0) // adds on first
arr.pop()// removes on last
arr.shift() //removes from first
console.log(arr);

let arr1 =[1,2,3,4,5]
arr1.splice(2,2)
console.log(arr1.slice(2,3))
console.log(arr1);
console.log(" ");


 arr2 =arr1.filter(element => {
    if (element == 2){
        return true
    }
 })
 console.log(arr1);
 console.log(arr2);

 let  arr3 =[0,1,2]
   // arr3 = [0,2,4]
 arr4 = arr3.map((element,index) =>{
    
    console.log(element);
    console.log(index);
    return element*2
   })
console.log(arr4);   

//some
//every

console.log(arr4.find(el => el == 2));

console.log();

// task no 1// form for loop
     // arr3 =[0,1,2]
     // arr3 = [0,2,4]

     let Arr = [0,1,2]
     for(let a = 0 ; a< Arr.length;a++){
      Arr[a]= Arr[a]*2

     }
     console.log(Arr);

   // task 2 
      //    let a = 1
      //    let b = 2
      //    output => b=1 , a=2
      //first method
      let num1 = 1
      let num2 = 2
      let temp = num1
       num1 = num2
       num2 = temp
      console.log(num1 , num2); 

     //second method
     let num4 = 1
     let num5 = 2
     if (num4>5){
      temp = num4 - num5
      num4 = num4 - temp
      num5 = num5 + temp
     }
     else{
      temp = num5 - num4
      num4 = num4 + temp
      num5 = num5 - temp
     }
     console.log(num4 , num5);


     let num9 = 4
     let num8 = 5
     num9 = num9 + num8
     num8 = num9 - num8
     num9 = num9 - num8
     console.log(num9 , num8);


      // task
     let e = 4 ;
     let f = 6 ;
     [e,f] = [f,e]
     console.log(e,f);