/*Descrizione:
1.Un alert() espone 5 numeri generati casualmente.
2.Da li parte un timer di 30 secondi.
3.Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
4.Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

var randomNumbers = []; // empty array to store random numbers

var userGuess = []; // declaring empty array to store the user choices

var randomNumber;
function generateRandomNumber() { // generate random numbers between 1-20.
    return randomNumber = Math.floor(Math.random() * 20);

}
generateRandomNumber();    // call the function

for (var i = 0; i < 5; i++) {
    generateRandomNumber();
    var randomNum = generateRandomNumber()
    randomNumbers.push(randomNum); // inserting random numbers inside my empty array randomNumbers
}
console.log(randomNumbers);
alert(" Remember these numbers: " + randomNumbers); // alert to the user showing the 5 random numbers


var timer = 30;                             //setting a timer of 30 seconds
var intervallo = setInterval(function () { // Inserting a 30s interval

    if (timer === 0) { // asking user the random numbers he saw before, one at a time with 5 diff. prompts.
        for (var i = 0; i < 5; i++) {
            userNumber = Number(prompt('Insert the numbers you saw before!:')); //asking for 5 times to the user the number he remebers
            userGuess.push(userNumber);      //pushing the numbers he guessed into the array userGuess
        }


        randomNumbers = randomNumbers.sort(function (a, b) { // using a function to sort the numbers in the array randomNumbers
            return a - b;
        });
        console.log(randomNumbers);

        userGuess = userGuess.sort(function (a, b) { // using a function to sort the numbers in the array userGuess
            return a - b;
        });
        console.log(userGuess);

        var rightGuesses = []; // declaring an array rightGuesses to store the right numbers guessed by the user

        rightGuesses = randomNumbers.filter(function (val) {    //creating a new array with the method .filter() that pass the condition
            return userGuess.indexOf(val) != -1;                //return the numbers that are present in both arrays
        });

        console.log(rightGuesses);


        console.log("Well done! You remembered " + rightGuesses.length + " number/s right.");
        console.log("You got it right the number/s " + rightGuesses + " were the same");
        alert("Well done! You remembered " + rightGuesses.length + " number/s right."); // showing to the user how many numbers he remembered
        alert("You guessed the number/s: " + rightGuesses); // showing to the user the numbers he remembered


        clearInterval(intervallo);

    } else {
        timer--;
    }
    document.getElementById('seconds').innerHTML = timer; // showing in browser countdown
}, 1000);