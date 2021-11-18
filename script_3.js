let answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let numberChosen = Number(answer);

i = 1;

while(i <= numberChosen){
  console.log("*".repeat(i).padStart(numberChosen));
  i++;
};
