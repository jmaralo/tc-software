function NotifyMom() {
    console.log("Son: I'm ready mom! Come pick me up")
    console.log("Mom: I'm on my way")
}

function Notify(message) {
    return function() {
        console.log(message)
    }
}

function GoOut() {
    console.log("Son: I'm going out with my friends!")
    setTimeout(Notify("I'm done"), 1000)
}

console.log("Mom: Call me when you need me to pick you up")
GoOut()