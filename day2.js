//primitive data types
    // Number
    // Boolean
    // String
    // null 
    // undefined

// non primitive data types
// also called reference data type
    // object(collection)
    //    -JS Object
    //    -Array


// define array
let fruit1 = "apple"
let fruit2 = "banana"
let arr = [fruit1,fruit2]
//indexing starts with zero   
console.log(arr) 
console.log(arr[1])

let obj = {
    value : "key"
}
console.log(obj)

let value ;
let value1 = null;
let obj2 ={
    "key" : value, //keys are also referred as attribute , property
    "key2" : value1 ,
    "key3": arr
}
console.log(obj2)
console.log(obj2.key2)
console.log(obj2.key3)


//operators
   // arithmetic operator
        // addition +
        // subtraction -
        // multiplication *
        // division / 
        // expoential ** (power)
        // modulus % (remainder)
        // increment ++
            //postincrement   //returns value befor it was incremented
            //    let num = 1
            //    console.log(num++) //gives 1

            //pre increment
            //  let num1 = 1
            //   console.log(++num1 ) //gives 2

             let num2 = 100
             console.log(num2++,num2) //give 100,101
            console.log(++num2,num2) //gives 102, 102



        // decrement 

    // logical
         //and ( && )
         //or ( || )
         //not !
         let status1 =true
         let status2 =true
         let status3 = false
         console.log((status1 && status2)&&status3)
         console.log((status1 && status2)||status3)
         console.log(!status3)


    
    
    // assignment (=)
    // bitwise (comapares on binary)
    // comparison
       // == (equals to)
       // != (not equals to)
       // === (equals to also checks datatypes)
       // !== (not equals to also checks datatypes)
       // 
       //
    
    //falsy values   