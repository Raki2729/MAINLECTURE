console.log("Hello from Node")
// filesystem modules "fs"
//HTTP modules-->IMP
//Readline modules ---> I/O operation
//Event modules

// Readline 
const readline = require('readline')
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Enter your Name", (name) => {
    const hello = name ?'hello $ {name}': 'Hello Friend!'
    console.log(hello)
    rl.close()
})

