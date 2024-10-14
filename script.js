const sazba = Number(prompt("Jaká je vaše hodinová sazba?", "200"));

document.body.innerHTML += "<p> Vaše měsíční výplata za předpokladu, že pracujete 8 hodin denně 21 dní v měsíci je " + 8 * 21 * sazba + " Kč. </p>"