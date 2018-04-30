class Deck{
    constructor(){
        // this.cards = ["d1","d2","d3","d4","d5","d6","d7","d8","d9","d10","dj","dq","dk","c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","cj","cq","ck","h1","h2","h3","h4","h5","h6","h7","h8","h9","h10","hj","hq","hk","s1","s2","s3","s4","s5","s6","s7","s8","s9","s10","sj","sq","sk"]
        this.cards = [];
        this.resetDeck = function (){
            var suits = ["d", "c", "h", "s"];
            for (var i = 0; i < suits.length; i++){
                for (var j = 1; j <= 13; j++){
                    var card = 0;
                    if (j <= 10){
                        card = j;
                    }
                    else if (j == 11){
                        card = "j";
                    }
                    else if (j == 12){
                        card = "q";
                    }
                    else if (j == 13){
                        card = "k";
                    }
                    else{
                        card = 10;
                    }
                    var myCard = new Card(suits[i],card);
                    this.cards.push(myCard);
                    // console.log(myCard)
                }
            }
        }
        this.resetDeck()
 
    }
    shuffle() {
        var m = this.cards.length, t, i;
      
        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = this.cards[m];
          this.cards[m] = this.cards[i];
          this.cards[i] = t;
        }
      
        return this.cards;
      }
      deal(){
        console.log("Number of cards in deck: " + this.cards.length);
        console.log(this.cards)
        var cardIndex = Math.floor(Math.random() * (this.cards.length - 1));
        console.log("Card Index Before Splice: " + cardIndex);
        // if (cardIndex > -1) {
            this.cards.splice(cardIndex, 1);
        // }
        // console.log(this.name);
        console.log("Card Index: " + cardIndex);
        console.log("Card: " + this.cards[cardIndex]);
        return this.cards[cardIndex];
      }
}
class Card{
    constructor(suit, cardName){
        this.suit = suit;
        this.card = cardName;
        this.value = 0;
        this.other = 0;
        this.imgLink = "";
        this.imgLink = this.suit+this.card;

        if (this.card == "j" || this.card == "q" || this.card == "k"){
            this.value = 10;
        }
        else if (this.card == 1){
            this.value = this.card;
            this.other = 11;
        }
        else{
            this.value = this.card;
        }
    }

}
class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
        this.value = 0;
        this.other = 0;
    }
    addToHand(card){
        this.hand.push(card)
    }
    addAndView(myDeck, game){
        // debugger;        
        var myCurrentCard = myDeck.deal()
        console.log(myCurrentCard);
        this.addToHand(myCurrentCard);
        var myCard = document.createElement("img");
        myCard.setAttribute('src', myCurrentCard.imgLink + ".png");
        // myCard.innerHTML = src
        this.value += myCurrentCard.value;        
        if (myCurrentCard.value == 1) {
            this.other += 11;
        }
        else{
            this.other += myCurrentCard.value;
        }
        var playerType = ""
        if (this.name == "dealer" || this.name == "Dealer"){
            playerType = "dealer"
            document.getElementById("dealerHand").appendChild(myCard);
            if (game.currentPlayer == this){
                if (this.value < 17 || this.other <= 17){
                    this.addAndView(myDeck);
                }
                else{

                }    
            }        
        }
        else{
            playerType = "player"
            document.getElementById("playerHand").appendChild(myCard);
        }
        if (this.value == this.other){
            document.getElementById(playerType + "Name").innerHTML = playerType.charAt(0).toUpperCase() + playerType.slice(1) + ": " + this.value
        }
        else if ((this.other <= 20) && (this.value != this.other)){
            document.getElementById(playerType + "Name").innerHTML = playerType.charAt(0).toUpperCase() + playerType.slice(1) + ": " + this.value + " or " + this.other
        }
        else if (this.other == 21 || this.value == 21){
            document.getElementById(playerType+"Name").innerHTML = playerType.charAt(0).toUpperCase() + playerType.slice(1) +": " + "21 | Blackjack"
        }
        else if ((this.value != this.other) && this.other > 21){
            document.getElementById(playerType + "Name").innerHTML = playerType.charAt(0).toUpperCase() + playerType.slice(1) + ": " + this.value
        }
            
        else{
            document.getElementById(playerType + "Name").innerHTML = playerType.charAt(0).toUpperCase() + playerType.slice(1) + ": " + this.value + " or " + this.other
        }
    }
 
}

class Game{
    constructor(){
        this.deck = new Deck()
        this.dealer = new Player("Dealer");
        this.player = new Player("James Bond");
        this.currentPlayer = this.player
    }
    startGame(){
        this.deck.shuffle();
        for (var i = 1; i <= 2; i++){
            this.dealer.addAndView(this.deck, this)
        } 
        for (var i = 1; i <= 2; i++){
            this.player.addAndView(this.deck, this)
        }
       
        var deckImg = document.getElementById("imgDeck")
        var that = this;
        deckImg.addEventListener("click", function(){
            console.log(that);
            that.currentPlayer.addAndView(that.deck, that);   
        });
        var stayBTN = document.getElementById("stayBTN");
        stayBTN.addEventListener("click", function(){
            currentPlayer = that.dealer
            if (that.dealer.value < 17 || that.dealer.other <= 17){
                that.dealer.addAndView(that.deck, that)
            }
            else{
                endGame();
            }            
        });
    }
    endGame(){

    }

}
var g = new Game();
g.startGame();
// if dealer is soft 17 (17 w/ ace) must hit