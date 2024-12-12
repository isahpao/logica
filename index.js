
let xpHeroi = ("Gato: 8002, Cherrie:10777, Farofa: 1000, Amor:9999, Morcega:7654").split(", ");

let frase = ""; 


xpHeroi.forEach(item => {
    let [nome, experiencia] = item.split(":");
    experiencia = parseInt(experiencia);
  

    
    if (experiencia <= 1000) {
        frase ="Ferro"; 
    } else if (experiencia >= 1001 && experiencia <= 2000) {
        frase ="Bronze"; }

    else if (experiencia >= 2001 && experiencia <= 5000) {
        frase ="Prata"; }

    else if (experiencia >= 5001 && experiencia <= 7000) {
        frase ="Ouro"; }

    else if (experiencia >= 7001 && experiencia <= 8000) {
        frase ="Platina"; }

    else if (experiencia >= 8001 && experiencia <= 9000) {
        frase ="Ascendente"; }

    else if (experiencia >= 9001 && experiencia <= 10000) {
        frase ="Imortal"; }

else {
        frase ="Lendário"; // Se a experiência for 10001 ou mais
    }
console.log(`Meu herói felino se chama ${nome} e é de nível ${frase}`);
});

