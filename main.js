/*Descrizione:
1.Un alert() espone 5 numeri generati casualmente.
2.Da li parte un timer di 30 secondi.
3.Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
4.Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


var randomNumber;
function generateRandomNumber (){                                           //generate random numbers between 1-20.
   return randomNumber = Math.floor(Math.random() * 20);
    
}
generateRandomNumber();                                                     //call the function

var randomNumbers = [];                                                     //empty array to store random numbers
for (var i=0; i<5; i++){
    generateRandomNumber();
    var randomNum = generateRandomNumber() 
    randomNumbers.push(randomNum);                                          //inserting random numbers inside my empty array
}

console.log(randomNumbers);
alert(" Remember these numbers: " + (randomNumbers))                        //alert to the user showing the 5 random numbers


var userGuess = [];
//var timer = 5;
//var intervallo = setInterval (function(){                                   //Inserting a 30s interval

//    if(timer === 0){                                                        //asking user the random numbers he saw before, one at a time with 5 diff. prompts.
        for (var i=0; i<5; i++){
            userNumber = Number(window.prompt('Insert the numbers you saw before:!'));
            userGuess.push(userNumber); 
        }
//        clearInterval(intervallo);

//    }else{
//        timer--;
//    }
//    document.getElementById('seconds').innerHTML = timer;                   //showing in browser countdown
//},1000);

console.log(userGuess);

var rightGuesses = [];

for(var j=0; j<randomNumbers.length; j++) {
    for(var k=0; k<userGuess.length; k++) {
        if (randomNumbers[j] === userGuess[k]){
            rightGuesses.push(randomNumbers[j]);
            console.log("You got it right the number " + userGuess[k] + " was the right guess!");
        }
    }

};

console.log("You remembered " + rightGuesses.length + " numbers right." )
console.log("You got it right the numbers " + rightGuesses + " were the same");