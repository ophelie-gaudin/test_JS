console.log("coucou depuis la console");

let myVariable ="pirate !";
console.log(myVariable);
console.log(typeof myVariable);

let a = 1;
let b = 1;
console.log(a);
console.log(b += 2);

let c = 1000;
c = String(c);
console.log(typeof c);

let statusDeTHP = ["Moussaillon", "Corsaire", "Renégat"];
console.log(statusDeTHP[0]);
console.log(statusDeTHP.length);
statusDeTHP[0] = "La moussaille";
console.log(statusDeTHP[0]);
statusDeTHP.push("Flibustier");
statusDeTHP.unshift("Pirate");
console.log(statusDeTHP);
console.log(statusDeTHP.slice(0,4));
statusDeTHP.pop();
console.log(statusDeTHP);
statusDeTHP.shift();
console.log(statusDeTHP);


let d= 3;
console.log("Bonjour tous les " + d);
console.log(typeof ("Bonjour tous les " + d));

console.log("The Hacking Project".indexOf("Hack"));

console.log("The Hacking Project".toLowerCase());

const contentOfTHP = "Git-Ruby-Rails-HTML-CSS-JS";
const lesson = contentOfTHP.split("-");
console.log(lesson[0]); // "Git"
console.log(lesson[5]); // "JS"

console.log("__________________________");
let THPSessionNum2 = {
  numOfMouss: 80,
  cities: ["Paris", "Lyon", "Montpellier"],
  successRate: 0.80,
  sessionMoto: "keep pushing to the top"
};


let attributName = "successRate";
console.log(THPSessionNum2[attributName]);

for(var count = 0; count <=5; count++){
  console.log(`on va compter jusqu'à 5 : ${count}`);
}

console.log(count);


let answer = "";
while(answer !== "oui") {
  console.log("alors ?")
  answer = prompt("Tu kiffes THP ?");
} 

console.log("haaa, tu nous fais plaisir !") // Qui se lassera le premier entre toi et ton ordi ? :D


//On déclare d'abord un array
let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

//On déclare ensuite un objet
let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};

console.log("**********Parcourons le array :")
for(let index in weeksOfTHPArray) {
  console.log(index); // index va aller de 0 à 3
  console.log(weeksOfTHPArray[index]);
}

console.log("**********Parcourons l'objet :")
for(let weekAttribut in weeksOfTHPObject) {
  console.log(weekAttribut); //weekAttribut va avoir les valeurs "Semaine5" à "Semaine8"
  console.log(weeksOfTHPObject[weekAttribut]);
}

function multiply(inputNumber1, inputNumber2) {
  let outputNumber = inputNumber1 * inputNumber2;
  return outputNumber;
}

console.log(multiply(2, 5))