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
class Hand {
    constructor() {
        this.score = 0;
        this.cards = [];
    }
    addCard(card) {
        if (card && this.cards.length < 3) {
            this.cards.push(card);
            this.score = this.getTotalValue();
        }
        else
            console.log('No card or hand full');
    }
    getCards() {
        return this.cards;
    }
    getTotalValue() {
        let total = 0;
        for (const card of this.cards) {
            if (card)
                total += card.getValue();
        }
        return total % 10;
    }
    clearHand() {
        this.cards = [];
    }
}
export default Hand;
