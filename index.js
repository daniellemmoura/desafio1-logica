let nomeHeroi = "Danielle"
let XP = "8001"

if (XP <= 1000) {
    XP = "Ferro"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + XP)
}else if ((XP >= 1001) && (XP <= 2000)){
    XP = "Bronze"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + XP)
}else if ((XP >= 2001) && (XP <= 5000)){
    XP = "Prata"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + XP)
}else if ((XP >= 6001) && (XP <= 7000)){
    XP = "Ouro"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + XP)
}else if ((XP >= 7001) && (XP <= 8000)){
    XP = "Platina"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + XP)
}else if ((XP >= 8001) && (XP <= 9000)){
    XP = "Ascendente"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + XP)
}else if ((XP > 9001) && (XP <= 10000)){
    XP = "Imortal"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + XP)
}else if (XP >= 10001){
    XP = "Radiante"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + XP)
}else {
    console.log("Nível não definido")
}