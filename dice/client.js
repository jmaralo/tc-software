const diceElement = document.getElementById("dice")
const rollElement = document.getElementById("roll")
const faceSelectElement = document.getElementById("face-select")
const faceElement = document.getElementById("faces")

let selectedFaces = faceSelectElement.value
faceSelectElement.oninput = () => {
    selectedFaces = faceSelectElement.value
    faceElement.innerHTML = selectedFaces
}

const ws = new WebSocket("ws://localhost:8080")

rollElement.onclick = () => {
    if (ws.readyState != WebSocket.OPEN) {
        console.error("server not ready")
        return;
    }

    ws.send(selectedFaces)
}

ws.onmessage = (message) => {
    diceElement.innerHTML = message.data
}