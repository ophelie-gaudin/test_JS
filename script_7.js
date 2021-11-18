let userSentence = prompt("Parle à ton Acné-Bot :");

let keepCalm = false;

// while(keepCalm === false) {
  if(userSentence.charAt(userSentence.length - 1) == "?"){
    console.log("Ouais ouais...");
  } else if((userSentence === userSentence.toUpperCase()) && (userSentence.length != 0)){
    console.log("Pwa, calme-toi!");
  } else if((userSentence.includes('Fortnite') || (userSentence.includes('fortnite')))){
    console.log("On s'fait une partie soum-soum ?");
  } else if(userSentence.length == 0){
    console.log("T'es en PLS ?");
  } else if(userSentence === "tg"){
    console.log("Me parle plus");
    keepCalm = true;
  } else {
    console.log("Balek!");
  };

// };
