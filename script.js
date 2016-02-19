var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    values.forEach(function(cardValue){
      // Loops through the array `values` and saves each item in the array to a
      // variable called `cardValue`
      var worthOfCard = values.indexOf(cardValue);
      // This saves the position of (`indexOf`) that card in the `values` array
      // The card values are ordered from smallest to greatest, so we can use
      // this later to tell which of two cards is bigger
      suits.forEach(function(cardSuit){
        // Loops through the array `suits` and saves each item in the array to a
        // variable called `cardSuit`
        var newCard = {
          value: cardValue,
          suit: cardSuit,
          worth: worthOfCard
        }
        // Creates a new object (series of key/value pairs) containing the info
        // for a new card
        game.deck.push(newCard);
        // Adds the new card to the `deck` array
      });
    });
  },
  shuffleDeck: function(){
    game.deck.sort(function(){
      // Uses Javascript's built-in `sort` function for arrays to re-order the
      // cards in `deck`
      var randomValue = Math.random();
      // Uses Javascript's built-in `random` function, which returns a random
      // float between 0 and 1
      if(randomValue > 0.5){
        return 1;
      }else{
        return -1;
      }
      /*
      The way `sort` works: Let's say your array is ["a", "b", "c", "d"].
      Javascript takes the things at indexes 0 and 1: "a" and "b" in this case.
      If the anonymous function in `sort` returns something greater than 0,
      Javascript leaves those two things in order. If it returns something less
      than 0, it REVERSES the order of those two things -- so it would become
      ["b", "a", "c", "d"]. Then it goes to the things at indexes 1 and 2.
      So, if the function ALWAYS returns something less than 0, the array would
      simply be flipped: ["d", "c", "b", "a"].
      The function here randomly returns either 1 or -1, randomly reversing
      things in the array. This leads to a randomly shuffled array.
      There are LOTS of ways to shuffle arrays. This way takes the least code.
      */
    });
  },
  getMorePlayers: function(){
    while(true){
      // This loop will repeat forever... until we tell it to stop with `break`
      var userInput = prompt(game.players.length + " player(s) so far. Enter a player name, or click 'cancel' to play.");
      if(userInput === null){
        // `prompt` boxes have an "OK" button and a "Cancel" button. Clicking
        // "Cancel" makes `prompt` return `null`. Clicking "OK" makes it return
        // whatever the user typed in.
        break;
        // `break` makes the `while` loop stop. So: if the user clicks `cancel`,
        // stop asking them to enter new players
      }else{
        game.players.push(userInput);
        // If the user clicked "OK", add what they typed to the list of players.
      }
    }
  },
  deal: function(){
    alert("Dealing...");
    game.players.forEach(function(playerName){
      // Loop through all the player names the user typed in
      var card = game.deck.pop();
      // Remove one item from the end of the `deck` array
      card.player = playerName;
      // The card is an object, so I can add properties and methods to it.
      // Here, I'm adding a new property called `player`, the value of which is
      // the current player name in the loop. `card` now looks like this:
      /*
      {
        value: cardValue,
        suit: cardSuit,
        worth: worthOfCard,
        player: playerName
      }
      */
      alert(card.player + " has been dealt the " + card.value + " of " + card.suit + "!");
      game.hands.push(card);
      // Add the card to the `hands` array
    });
  },
  findHighestCard: function(){
    game.hands.sort(function(cardOne, cardTwo){
      if(cardOne.worth > cardTwo.worth){
        return 1;
      }else{
        return -1;
      }
      /*
      See the previous note about `sort` functions. This is the same function,
      but it looks a little different: it takes two arguments, `cardOne` and
      `cardTwo`. These represent the two items in the `hands` array that
      Javascript is currently trying to figure out how to order.
      Remember: if the function returns anything greater than 0 the items are
      left in their current order. If it returns less than 0, the order of the
      two items is reversed.
      So here we're saying: if cardOne is worth more than cardTwo, leave them
      in order. If cardTwo is worth more, it should go before cardOne.
      This results in the cards being ordered by their worth.
      */
    });
  },
  announceWinners: function(){
    var place = game.players.length;
    // If there are 4 players, we want to announce 4th place first
    alert("And the winners are...");
    game.hands.forEach(function(card){
      alert(card.player + " is number " + place + " with the " + card.value + " of " + card.suit + "!");
      place = place - 1;
      // Now we'll see who's in 3rd place...
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
