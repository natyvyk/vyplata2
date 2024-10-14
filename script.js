const sazba = Number(prompt("Jaká je vaše hodinová sazba?", "200"));
const pocetHodin = Number(prompt("Kolik hodin denně pracujete?", "8"))
const pocetDni = Number(prompt("Kolik dní v měsíci pracujete?","21"))

document.body.innerHTML += "<p> Vaše měsíční výplata je " + pocetHodin * pocetDni * sazba + " Kč. </p>"