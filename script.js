var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
//Populates the deck array with 52 standard playing cards.
  },

  shuffleDeck: function(){
//Randomizes the order of deck.
  },
  
  getMorePlayers: function(){
//Asks the user if they want to add an additional player to the game. If they do, the player is added to the players array. If not, the script continues.
  },
  deal: function(){
// Assigns one card to each player.
  },
  findHighestCard: function(){
// Finds the player with the highest card. Aces are high. For now, don't worry about ties, nor about one suit being more valuable than another suit.
  },
  announceWinners: function(){
//Alerts the card each player drew, their name, and their ranking. For example, "Alice is number 1 with the 9 of Spades! Bob is number 2 with the 6 of diamonds!" (Dialogs are annoying. How could you show all this in one alert box, rather than one for each player?)
  },
  playANewGame: function(){
//Runs all the previous methods in the proper order.
  }
}
