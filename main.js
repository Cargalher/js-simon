/*Descrizione:
1.Un alert() espone 5 numeri generati casualmente.
2.Da li parte un timer di 30 secondi.
3.Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
4.Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


var randomNumber;
function generateRandomNumber (){
    var randomNumber = Math.floor(Math.random() * 20);
    console.log(randomNumber);
}
generateRandomNumber();

var randomNumbers = [];
for (var i=0; i<5; i++){
    generateRandomNumber();
    var randomNum = generateRandomNumber() 
    randomNumbers.push(randomNum);
}

console.log(randomNumbers);
alert(" these are your 5 random numbers: " + (randomNumbers))




