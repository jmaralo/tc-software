function NotifyMom() {
    console.log("Son: I'm ready mom! Come pick me up")
    console.log("Mom: I'm on my way")
}

function GoOut(done) {
    console.log("Son: I'm going out with my friends!")
    setTimeout(done, 5000)
}

console.log("Mom: Call me when you need me to pick you up")
GoOut(NotifyMom)