const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//  Tous empruntés au moins une fois
console.log("Est-ce que tous les livres ont étés empruntés au moins une fois ?");

let areAllShared = true;

for(let i = 0; i < books.length; i++){
  if(books[i].rented <= 0){
    areAllShared = false;
    break;
  }
};

console.log(areAllShared);

console.log("_____________________");


// Le livre le plus emprunté
console.log("Quel est le livre le plus emprunté ?");

let mostRead = books.reduce(function(prev, current) {
  if (+current.rented > +prev.rented) {
      return current;
  } else {
      return prev;
  }
});
console.log(mostRead.title);

console.log("_____________________");



// Le livre le moins emprunté
console.log("Quel est le livre le moins emprunté ?");

let lessRead = books.reduce(function(prev, current) {
  if (+current.rented < +prev.rented) {
      return current;
  } else {
      return prev;
  }
});
console.log(lessRead.title);

console.log("_____________________");

// id = 873495
console.log("Le livre avec l'id de 873495: ")

let chosenBook = books.find(book => book.id == 873495);

console.log(chosenBook.title);

console.log("_____________________");

// supprimer él id = 133712
console.log("Tableau sans le livre d'id de 133712: ");

let removeIndex = books.findIndex( book => book.id === 133712, 1);
let removeBook = books.splice(removeIndex, 1);

console.log(books);

console.log("_____________________");

// trier les titres par ordre alphabétique
console.log("Par ordre alphabétique");

let alphabeticArray = books.sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0);
console.log(alphabeticArray);
