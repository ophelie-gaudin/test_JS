let arn1 = "CCGUCGUUGCGCUACAGC";
let arn2 = "CCUCGCCGGUACUUCUCG";
let arnChainsArray = [arn1, arn2];

for( let index in arnChainsArray ){

var arnArray = [];
let endSubstringIndex = 3;

do{ arnArray.push(arnChainsArray[index].substring(0, endSubstringIndex))}
while( (arnChainsArray[index] = arnChainsArray[index].substring(endSubstringIndex, arnChainsArray[index].length)) != "");

console.log(arnArray);

var aminoAcidsArray = [];

for( let index in arnArray ){
  if(arnArray[index] == "UCU" || arnArray[index] == "UCC" || arnArray[index] =="UCA" || arnArray[index] =="UCG" || arnArray[index] =="AGU" || arnArray[index] =="AGC"){
    aminoAcidsArray.push("Sérine");
  } else if(arnArray[index] == "UUA" || arnArray[index] == "UUG"){
    aminoAcidsArray.push("Leucine");
  } else if(arnArray[index] == "CCU" || arnArray[index] == "CCC" || arnArray[index] == "CCA" || arnArray[index] == "CCG"){
    aminoAcidsArray.push("Proline");
  } else if(arnArray[index] == "UUU" || arnArray[index] == "UUC"){
    aminoAcidsArray.push("Phénylalanine");
  } else if(arnArray[index] == "CGU" || arnArray[index] == "CGC" || arnArray[index] == "CGA" || arnArray[index] == "CGG" || arnArray[index] == "AGA" || arnArray[index] == "AGG"){
    aminoAcidsArray.push("Arginine");
  } else if(arnArray[index] == "UAU" || arnArray[index] == "UAC"){
    aminoAcidsArray.push("Tyrosine");
  }else {
    aminoAcidsArray.push("Blabla"); 
  }
}

console.log(aminoAcidsArray);
}; 

