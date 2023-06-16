import Card from "./card.js";
import { CardValue } from "../types.js";


class Deck {
    private cards: Card[];

    constructor(){
        this.cards = [];
        this.initializeDeck();
    }

    private initializeDeck(): void{
        const suits: string[] = ['♠', '♥', '♦', '♣'];
        const values: CardValue = {
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

        for(const suit of suits){
            for (const [key, value] of Object.entries(values)) {
                const cardValue: CardValue = {};
                cardValue[key] = value;
                const card = new Card(cardValue, suit);
                this.cards.push(card);
            }
        }
    }

    public shuffle(): void{
        for (let currentIndex: number = this.cards.length - 1; currentIndex > 0; currentIndex--) {
            const randomIndex: number = Math.floor(Math.random() * (currentIndex + 1));
            [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]];
        }
    }

    public dealCard(): Card | null{
        if(this.cards.length !== 0){
            const card: Card =  this.cards.splice(0, 1)[0];
            /*debug*/ console.log("card:", card);
            return card;
        } else {
            /*debug*/ console.log("Deck's empty.")
            return null
        }
    }
}

export default Deck;