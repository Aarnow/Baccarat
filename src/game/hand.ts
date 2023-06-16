import Card from "./card.js"
import { CardTuple } from "../types.js"

class Hand {
    private cards: CardTuple;

    constructor(){
        this.cards = [];
    }

    public addCard(card: Card | null): void{
        if(card && this.cards.length < 3) this.cards.push(card);
        else console.log('Aucune ')
    }

    public getCards(): CardTuple{
        return this.cards;
    }

    public getTotalValue(): number {
        let total = 0;
        for(const card of this.cards){
            if(card) total += card.getValue();
        }
        return total % 10;
    }

    public clearHand(): void {
        this.cards = [];
    }
}

export default Hand;