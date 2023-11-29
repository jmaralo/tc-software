// This program counts from n down to 1

const countdown = 5

// for repeats an action a certain amount of times, it has three parts:
// first a loop variable (in this case i)
// then a loop condition (in this case i < countdown)
// and then how to update the loop variable (in this case add 1 to i)
for (let i = 0; i < countdown; i++) {
    console.log(countdown - i)
    // sleep for 1 second
}

console.log("Time is up")