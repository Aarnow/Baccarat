import Card from "./card.js";
class Deck {
    constructor() {
        this.cards = [];
        this.initializeDeck();
    }
    initializeDeck() {
        const suits = ['♠', '♥', '♦', '♣'];
        const values = {
            'As': 1,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 0,
            'J': 0,
            'Q': 0,
            'R': 0
        };
        for (const suit of suits) {
            for (const [key, value] of Object.entries(values)) {
                const cardValue = {};
                cardValue[key] = value;
                const card = new Card(cardValue, suit);
                this.cards.push(card);
            }
        }
    }
    shuffle() {
        for (let currentIndex = this.cards.length - 1; currentIndex > 0; currentIndex--) {
            const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
            [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]];
        }
    }
    dealCard() {
        if (this.cards.length !== 0) {
            const card = this.cards.splice(0, 1)[0];
            /*debug*/ console.log("card:", card);
            return card;
        }
        else {
            /*debug*/ console.log("Deck's empty.");
            return null;
        }
    }
}
export default Deck;
