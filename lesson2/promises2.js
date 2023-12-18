const bar = new Promise((resolve) => setTimeout(() => resolve("ok"), 1000))

async function foo() {
    console.log("before")
    console.log(await bar)
    console.log("after")
}
foo()