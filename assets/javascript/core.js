//Firebase access.
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAUQXnkdtFr0IovgRm3Xzy5f8xBm8ngAu8",
    authDomain: "rock-paper-scissor-mpg.firebaseapp.com",
    databaseURL: "https://rock-paper-scissor-mpg.firebaseio.com",
    storageBucket: "rock-paper-scissor-mpg.appspot.com",
    messagingSenderId: "1010009188997"
};

firebase.initializeApp(config);


//Your choices in the game.
var options ["rock", "paper", "scissors"];

//To keep track of who does what.
var player1;
var player2;

//Wins, loses, and ties.
var win1 = 0;
var win2 = 0;
var loss1 = 0;
var loss2 = 0;
var tie = 0; //Tie is a shared variable between the two players.

//What each player picks
var player1Pick;
var player2Pick;

//Sign in info goes here.

//For loop to generate buttons goes here.

//Click events for choosing options goes here.

//Tie conditions
if(player1Pick == player2Pick){
	//Display Tie message on boths screens
	tie++;
}

//Options if Player1 picks rock
if(player1Pick =="rock" && player2Pick == "paper"){
	//Display player1 lose message
	//Display player2 win message
	win2++;
	loss1++;
}

if(player1Pick == "rock" && player2Pick == "scissors"){
	//Display player1 win message
	//Display player2 lose message
	win1++;
	loss2++;
}

//Options if player1 picks paper
if(player1Pick =="paper" && player2Pick == "scissors"){
	//Display player1 lose message
	//Display player2 win message
	win2++;
	loss1++;
}

if(player1Pick == "paper" && player2Pick == "rock"){
	//Display player1 win message
	//Display player2 lose message
	win1++;
	loss2++;
}

//Options if player1 picks scissors
if(player1Pick =="scissors" && player2Pick == "rock"){
	//Display player1 lose message
	//Display player2 win message
	win2++;
	loss1++;
}

if(player1Pick == "scissors" && player2Pick == "paper"){
	//Display player1 win message
	//Display player2 lose message
	win1++;
	loss2++;
}