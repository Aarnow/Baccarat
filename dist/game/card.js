class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    getValue() {
        return Object.values(this.value)[0];
    }
    getSuit() {
        return this.suit;
    }
}
export default Card;
