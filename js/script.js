//printMessage('Zagrałem ' + 'kamień' + '! Jeśli Twój ruch to papier, to wygrywasz!');
//printMessage('Zagrałem' + 'papier' + '! Jeśli Twój ruch to nożyce, to wygrywasz!');


// var computerMove, playerMove;
//computerMove = 'kamień';
//printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
//playerMove = 'papier';
//printMessage('Zagrałem' + playerMove + '!Jeżeli Twój ruch to nożyce, to wygrywasz!');






var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);
if (randomNumber == '2') {
  computerMove = 'papier';
} else {
  computerMove = 'nieznany ruch';
}
if (randomNumber == '3') {
  computerMove = 'nożyce';
} else {
  computerMove = 'nieznany ruch';
}
