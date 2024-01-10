// Desafio pela DIO para cálculo de partidas rankeadas utilizando funções;
//Made by Luiz Felipe
//07/01/2024

function rankedCalculator(victory, defeat){
    return victory - defeat;
}

function heroLevel(victoryScore){
    let level;
    if (victoryScore <= 10) {
        level = "Ferro";
    } else if (victoryScore <= 20) {
        level = "Bronze";
    } else if (victoryScore <= 50) {
        level = "Prata";
    } else if (victoryScore <= 80) {
        level = "Ouro";
    } else if (victoryScore <= 90) {
        level = "Diamante";
    } else if (victoryScore <= 100) {
        level = "Lendário";
    } else {
        level = "Imortal";
    }
    console.log("============================================================");
    if (victoryScore < 0) {
        absoluteNumber = Math.abs(victoryScore);
        console.log(`O herói tem o saldo negativo de ${absoluteNumber} e está no nível de ${level}`);
    } else {
        console.log(`O herói tem o saldo de ${victoryScore} e está no nível de ${level}`);
        console.log("\n");
    }
   
    
}
function main(){
    let victoriesAndDefeats = [[25, 15], [68,46], [86, 70], [21, 45]]; 
    let victoryScore;

    for (let counter = 0; counter < victoriesAndDefeats.length; counter++) {
        victoryScore = rankedCalculator(victoriesAndDefeats[counter][0], victoriesAndDefeats[counter][1]);
        heroLevel(victoryScore);
    }

}

main();


