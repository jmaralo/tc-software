console.log("before promise")

const promiseA = new Promise((resolve, _reject) => {
    setTimeout(() => resolve("Ok!"), 1000)
})

promiseA.then((res) => console.log(res))

console.log("after promise")