async function promiseA() {
    return await new Promise((resolve) => {
        setTimeout(() => resolve("Ok!"), 1000)
    })
}
    
async function foo() {
    console.log("before promise")
    console.log(await promiseA())
    console.log("after promise")
}

foo()