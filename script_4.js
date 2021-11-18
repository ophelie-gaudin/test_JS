const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Les personnes nées dans les années 70':
console.log("Les personnes nées dans les années 70");

const isBornIn70 = entrepreneurs.filter( people => (people.year < 1980) && (people.year >= 1970));
console.log(isBornIn70);

console.log("________________");


// Seulement les noms et prénoms 
console.log("Seulement les noms et prénoms");

let entrepreneursNames = entrepreneurs.map(people => {
  let properties = {
    "first_name": people.first,
    "last_name" : people.last
  };
  return properties;
});
console.log(entrepreneursNames);

console.log("________________");


// Âge de chaque personne
console.log("Avec l'âge");

let entrepreneursNamesAges = entrepreneurs.map(people => {
  let properties = {
    "first_name": people.first,
    "last_name" : people.last,
    "age" : (2021 - people.year)
  };
  return properties;
});
console.log(entrepreneursNamesAges);

console.log("________________");


// Tri par ordre alphabétique 
console.log("Par ordre alphabétique");

let alphabeticArray = entrepreneurs.sort((a, b) => (a.first > b.first) ? 1 : (a.first < b.first) ? -1 : 0);
console.log(alphabeticArray);

