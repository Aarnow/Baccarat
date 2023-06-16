class Hand {
    constructor() {
        this.cards = [];
    }
    addCard(card) {
        if (card && this.cards.length < 3)
            this.cards.push(card);
        else
            console.log('Aucune ');
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
