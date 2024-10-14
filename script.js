const nazev = "Kniha 1"
const autor = "Natálie Vykoukalová"
const cena = 450
const naSklade = true

const kniha = {
    nazev: "Kniha 1",
    autor: "Natálie Vykoukalová",
    cena: 450,
    naSklade: true,
}

document.body.innerHTML += "<p>Kniha: " + nazev + ", autor: " + autor + "</p>"
document.body.innerHTML += "<p>Kniha: " + kniha.nazev + ", autor: " + kniha.autor + "</p>"
