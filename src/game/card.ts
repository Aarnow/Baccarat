import { CardValue } from "../types.js";

class Card {

    private value: CardValue;
    private suit: string;

    constructor(value: CardValue, suit: string) {
        this.value = value;
        this.suit = suit;
    }

    public getValue(): number {
        return Object.values(this.value)[0];
    }

    public getSuit(): string {
        return this.suit;
    }
}

export default Card;