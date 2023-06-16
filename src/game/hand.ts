import Card from "./card.js"

class Hand {
    private cards: Card[];

    constructor(){
        this.cards = [];
    }

    public addCard(card: Card): void{
        this.cards.push(card);
    }

    public getCards(): Card[]{
        return this.cards;
    }

    // public getTotalValue(): number {
    //    for(const card of this.cards){
    //     card.getValue
    //    }
    // }
    
}