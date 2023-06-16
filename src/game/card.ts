export type CardValue = Record<string, number>;

class Card {
    private value: CardValue;
    private suit: string;

    constructor(value: CardValue, suit: string) {
        this.value = value;
        this.suit = suit;
    }

    public getValue(): CardValue {
        return this.value;
    }

    public getSuit(): string {
        return this.suit;
    }
}

export default Card;