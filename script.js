let jugador = 0
let pc = 3
jugador = prompt("Elige: 1 Piedra, 2 papel o 3 tijera")
//alert(" Elegiste " + jugador)
if(jugador == 1) {
    alert("Elegiste 🥌")
}else if (jugador == 2) {
    alert("Elegiste 📄")
}else if (jugador == 3) {
    alert("Elegiste ✂")
}else {
    alert("Perdiste")
}
if(pc == 1) {
    alert("PC eligió 🥌")
}else if (pc == 2) {
    alert("PC eligió 📄")
}else if (pc == 3) {
    alert("PC eligió ✂")
}
if (pc == jugador) {
    alert ("Empate")
}else if (jugador == 1 && pc == 3) {
    alert ("Ganaste")
}else if (jugador == 2 && pc == 1) {
    alert ("Ganaste")
}else if (jugador == 3 && pc == 2) {
    alert ("Ganaste")
}else {
    alert ("Perdiste")
}