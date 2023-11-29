// This program takes an age and says if we have the legal age

const age = 20

// The if statement checks a certain condition is met and executes its code if it does
// ifs take a 'boolean' value, which can only be "true" or "false"
// we can compare values using '>', '<', '>=', '<=', '==' and '!='
if (age > 18) {
    console.log("You are above the legal age")
// The else if statement will check its condition if the first didn't meet
} else if (age == 18) {
    console.log("You have the legal age")
// The else statement executes if none of the conditions meet
} else {
    console.log("You are under the legal age")
}

// We can also compare booleans with boolean operators, these are
// And '&&' (both conditions are true)
// Or '||' (at least one condition is true)
// Not '!' (the condition isn't true)
if (!(age > 18) && !(age < 18)) {
    console.log("You have the legal age")
}