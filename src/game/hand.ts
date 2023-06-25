/**
 * Class Hand
 *
 * Cette classe représente le modèle de la main d'un joueur.
 * Elle fournit des opérations pour manipuler :
 *      - les cartes
 *      - sur la valeur
 *
 * @version : 0.01
 * */

import Card from "./card.js"
import { CardTuple } from "../types.js"

class Hand {
    public cards: CardTuple;
    public score: number;

    constructor(){
        this.score = 0;
        this.cards = [];
    }

    public addCard(card: Card | null): void{
        if(card && this.cards.length < 3){
            this.cards.push(card)
            this.score = this.getTotalValue();
        } else console.log('No card or hand full')
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