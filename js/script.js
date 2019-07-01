//printMessage('Zagrałem ' + 'kamień' + '! Jeśli Twój ruch to papier, to wygrywasz!');
//printMessage('Zagrałem' + 'papier' + '! Jeśli Twój ruch to nożyce, to wygrywasz!');


// var computerMove, playerMove;
//computerMove = 'kamień';
//printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
//playerMove = 'papier';
//printMessage('Zagrałem' + playerMove + '!Jeżeli Twój ruch to nożyce, to wygrywasz!');



//var computerMove, randomNumber;
//randomNumber = Math.floor(Math.random() * 3 + 1);
//console.log('wylosowana liczba to: ' + randomNumber);
//if (randomNumber == '1') {
//  computerMove = 'kamień';
//} else {
//  computerMove = 'nieznany ruch';
//}
//printMessage('Mój ruch: ' + computerMove);
//if (randomNumber == '2') {
//  computerMove = 'papier';
//} else {
//  computerMove = 'nieznany ruch';
//}
//printMessage('Mój ruch: ' + computerMove);
//if (randomNumber == '3') {
//  computerMove = 'nożyce';
//} else {
//  computerMove = 'nieznany ruch';
//}
//printMessage('Mój ruch: ' + computerMove);



//var playerInput, playerMove;
//playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
//console.log('Wpisana odpowiedź to: ' + playerInput);
//if (playerInput == '1') {
//  playerMove = 'kamień';
//} else {
//  playerMove = 'nieznany ruch';
//}
//printMessage('Twój ruch: ' + playerMove);
//playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
//console.log('Wpisana odpowiedź to:' + playerInput);
//if (playerInput == '2') {
//  playerInput = 'papier';
//} else {
//  playerInput = 'Błąd! Zły ruch';
//}
//printMessage('Twój ruch:' + playerMove);
//playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
//console.log('Wpisana odpowiedź' + playerInput);
//if (playerInput equal '3') {
//  playerInput = 'nożyce';
//} else {
//  playerInput = 'Błąd! Zły ruch.';
//}


var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
  if (argMoveId == 2) {
    return 'papier';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "papier".');
    return 'papier';
  }
  if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "nożyce".');
    return 'nożyce';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
