/* Take a look at script-annotated.js for explanations of this code.*/

var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    values.forEach(function(cardValue){
      var worthOfCard = values.indexOf(cardValue);
      suits.forEach(function(cardSuit){
        var newCard = {
          value: cardValue,
          suit: cardSuit,
          worth: worthOfCard
        }
        game.deck.push(newCard);
      });
    });
  },
  shuffleDeck: function(){
    game.deck.sort(function(){
      var randomValue = Math.random();
      if(randomValue > 0.5){
        return 1;
      }else{
        return -1;
      }
    });
  },
  getMorePlayers: function(){
    while(true){
      var userInput = prompt(game.players.length + " player(s) so far. Enter a player name, or click 'cancel' to play.");
      if(userInput === null){
        break;
      }else{
        game.players.push(userInput);
      }
    }
  },
  deal: function(){
    alert("Dealing...");
    game.players.forEach(function(playerName){
      var card = game.deck.pop();
      card.player = playerName;
      alert(card.player + " has been dealt the " + card.value + " of " + card.suit + "!");
      game.hands.push(card);
    });
  },
  findHighestCard: function(){
    game.hands.sort(function(cardOne, cardTwo){
      if(cardOne.worth > cardTwo.worth){
        return 1;
      }else{
        return -1;
      }
    });
  },
  announceWinners: function(){
    var place = game.players.length;
    alert("And the winners are...");
    game.hands.forEach(function(card){
      alert(card.player + " is number " + place + " with the " + card.value + " of " + card.suit + "!");
      place = place - 1;
    });
  },
  playANewGame: function(){
    game.buildDeck();
    game.shuffleDeck();
    game.getMorePlayers();
    game.deal();
    game.findHighestCard();
    game.announceWinners();
  }
}
game.playANewGame();
