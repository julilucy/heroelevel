let heroeName = "Julilucy";
let xpHeroes = 10000;
let level;

switch (true) {
    case xpHeroes < 1000:
        level = "Ferro";
        break;
    case xpHeroes <= 2000:
        level = "Bronze";
        break;
    case xpHeroes <= 5000:
        level = "Prata";
        break;
    case xpHeroes <= 7000:
        level = "Ouro";
        break;
    case xpHeroes <= 8000:
        level = "Platina";
        break;
    case xpHeroes <= 9000:
        level = "Ascendente";
        break;
    case xpHeroes <= 10000:
        level = "Imortal";
        break;
    default:
        level = "Radiante";
        break;
}

console.log(`O Herói de nome ${heroeName} está no nível de ${level}`);
