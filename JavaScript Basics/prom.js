function promExample(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // true must be lowercase in JavaScript
            if(success){
                const data = {message: "Promise Resolved",value: random}
                resolve(data);
            } else {
                reject(new Error('Promise Resolved')); // Error should start with uppercase 'E'
            }
        }, 4000)
    })
}

//promExample().then((response) => {
  //  console.log(response.message)
//}).catch((error) => {
   // console.log(error)
//})

console.log("Promise is Pending....")

async function asyncAwaitFunctionExample(){
    try{
        const response = await promExample()
        console.log(response.message);

    }
    catch(error){
        console.error(error);
    }
}
console.log("Async/Await")
asyncAwaitFunctionExample()