console.log("JS file is connected to HTML! Woo!")
// var cardONe = "king";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "queen";
var cards = ['queen', 'queen', 'king', 'king'];
/*if (cardONe === cardTwo) {
	alert("You found a match!");
}else if (cardThree === cardFour) {
	alert("You found a match");
}else{
	alert("Sorry, try again.");
};*/

var gameBoard = document.getElementById('game-board');

function createCards(){

	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		gameBoard.appendChild(cardElement);
	}
};
createCards();