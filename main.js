/*Descrizione:
1.Un alert() espone 5 numeri generati casualmente.
2.Da li parte un timer di 30 secondi.
3.Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
4.Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


var randomNumber;
function generateRandomNumber (){
   return randomNumber = Math.floor(Math.random() * 20);
    
}
generateRandomNumber();

var randomNumbers = [];
for (var i=0; i<5; i++){
    generateRandomNumber();
    var randomNum = generateRandomNumber() 
    randomNumbers.push(randomNum);
}

console.log(randomNumbers);
alert(" Remember these numbers: " + (randomNumbers))


var timer = 5;
var intervallo = setInterval (function(){

    if(timer === 0){
        for (var i=0; i<5; i++){
           prompt('Insert the numbers you saw before:!'); 
        }
        clearInterval(intervallo);

    }else{
        timer--;
    }
    document.getElementById('seconds').innerHTML = timer;


},1000);