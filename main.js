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


var timer = 5;
var intervallo = setInterval (function(){                                   //Inserting a 30s interval

    if(timer === 0){                                                        //asking user the random numbers he saw before, one at a time with 5 diff. prompts.
        for (var i=0; i<5; i++){
           prompt('Insert the numbers you saw before:!'); 
        }
        clearInterval(intervallo);

    }else{
        timer--;
    }
    document.getElementById('seconds').innerHTML = timer;                   //showing in browser countdown
},1000);



// Tell user how many numbers and which ones he guessed
var guessingNumber;
var answer;
// if(answer === [0] || answer === [1] || answer === [2] || answer === [3] || answer === [4]){
// alert("You guessed");
// }else{
//     alert("Sorry, wrong number inserted!");
// };


/*switch (guessingNumber){
case [0]: 
    answer = alert("You guessed number: " + [0]);
    break;
case [1]:
    answer = alert("You guessed number: " + [1]);
    break;
case [2]:
    answer = alert("You guessed number: " + [2]);
    break;
case [3]:
    answer = alert("You guessed number: " + [3]);
    break;
case [4]:
    answer = alert("You guessed number: " + [4]);
    break;
default:
    answer = alert("Sorry, wrong number inserted!");
}*/

/*switch (guessingNumber){
    case [0]: 
        answer = "You guessed number: " + [0];
        break;
    case [1]:
        answer = "You guessed number: " + [1];
        break;
    case [2]:
        answer = "You guessed number: " + [2];
        break;
    case [3]:
        answer = "You guessed number: " + [3];
        break;
    case [4]:
        answer ="You guessed number: " + [4];
        break;
    default:
        answer = "Sorry, wrong number inserted!";
    }
    document.getElementById("text").innerHTML = answer;*/