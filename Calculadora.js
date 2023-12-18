let a = "4 + 3 % 2 + 3"; // String we introduce
let sol = 0; // solution variable
let length = a.length; // length of the String

// for to calculate all the operations one for one
for (let i = 0; i < length; i += 4) {
    let b = parseFloat(a.charAt(i)); // get the char in (i) position and convert the char in float
    let c = a.charAt(i + 2); // get the operator
    let d = parseFloat(a.charAt(i + 4)); //get the char in (i + 4) position anf convert the char in float

    // if to know if is the first operation
    if (i === 0) {
        switch (c) {
            case '+':
                sol = b + d;
                break;

            case '-':
                sol = b - d;
                break;

            case '*':
                sol = b * d;
                break;

            case '/':
                sol = b / d;
                break;

            case '%':
                sol = b % d;
                break;

        }
    } else {
        switch (c) {
            case '+':
                sol = sol + d;
                break;

            case '-':
                sol = sol - d;
                break;

            case '*':
                sol = sol * d;
                break;

            case '/':
                sol = sol / d;
                break;

            case '%':
                sol = sol % d;
                break;
        }
    }
}
// print to screen the solution
console.log(sol);