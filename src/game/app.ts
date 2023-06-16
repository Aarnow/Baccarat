import Deck from "./deck.js";
import Hand from "./hand.js";

let deck = new Deck();
deck.shuffle();

let playerHand = new Hand();
let bankerHand = new Hand();
playerHand.addCard(deck.dealCard());
playerHand.addCard(deck.dealCard());
bankerHand.addCard(deck.dealCard());
bankerHand.addCard(deck.dealCard());

let playerScore = playerHand.getTotalValue();
let bankerScore = bankerHand.getTotalValue();

console.log("playerScore", playerScore);
console.log("bankerScore", bankerScore);

playerHand.clearHand();
console.log("playerHand", playerHand);

export { deck };