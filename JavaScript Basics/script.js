console.log("Hello World")
console.log("hello")
console.log("Hello from SFBU")
// closure in js

function mainFunction(){
    let year= 2024
    let myVariableName = "this is year 2024"

    function childFunction(){
        let nextYear = year + 1;
        let childVariableName = myVariableName
        console.log(nextYear, childVariableName)

    }
    return childFunction
}
const simpleClosure = mainFunction()
simpleClosure()

function createCounter(){
    let count = 0;
    function increment(){
        count++
        console.log(count)
    }
    function decrement(){
        count --
        console.log(count)
    }
    return {
        increment,
        decrement
    }
}

const counter1 = createCounter()
const counter2 = createCounter()

counter1.increment()
counter1.increment()
counter1.increment()
counter1.increment()

counter2.decrement()
counter2.decrement()
counter2.decrement()
counter2.decrement()

// Asynchronous Programming
// callbacks
// promise
// Async/wait
// callbacks
/*function passed to another function as an arg to be excecuted later/to do async option
function functionCallBack(random_args){
    ...
    ....
    ...
}
function functionThatTakesCallbackAsArgs(callback){
    ..
    ..
    let random_args = false
    callback(random_args)
}
*/
// callback function
/*function helloAlert(name){
    alert('Hello ${name}');
}
function processCallBackFunction(callback){
    let name=prompt("please enter your name!")
    callback(name)
}
processCallBackFunction(helloAlert)*/
// Promise
// pending, resolved,rejected
function promiseExample(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success = true;
            if(success){
                const data = {message: "Promise Resolved"}
                //const data ={message: "Promise Resolved",value:random}
                resolve(data)
            }else{
                reject(new Error('Promise Rejected'))
            }
            },5000)
        })
    
}
//promiseExample().then((response)=>{
   // console.log(response.message)
//}).catch((error)=>{
   // console.log(error)
//})
//console.log("Promise is Pending...")
// Async/await
/*
allows you to write async code in a sync way so that its easier to read and maintain
Async: keyword and a function that returms a promise, and also it allow you to use "Await"keyword inside that function
Await:keyword which is used to pause an execute of the async function. it can only be used inside async function
*/
async function asyncAwaitFunctionExample(){
    try{
        const response = await promiseExample()
        console.log(response.message)

    }
    catch(error){
        console.error(error)
    }
}
console.log("Async/Await")
asyncAwaitFunctionExample()
