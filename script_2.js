let numberChosen = prompt("De quel nombre veux-tu calculer la factorielle ?");
let result = 1;

while(numberChosen >= 1){
  result *= numberChosen;
  numberChosen --;
};

console.log(result)