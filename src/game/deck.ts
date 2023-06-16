import Card from "./card.js";

class Deck {
    private cards: Card[];

    constructor(){
        this.cards = [];
        this.initializeDeck();
    }

    private initializeDeck(): void{
        const suits: string[] = ['♠', '♥', '♦', '♣']
        const values: string[] = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'R']

        for(const suit of suits){
            for(const value of values){
                const card = new Card(value, suit)
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
}

export default Deck;