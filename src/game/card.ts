class Card {
    private face: string;
    private value: number;
    private suit: string;

    constructor(face: string, value: number, suit: string) {
        this.face = face;
        this.value = value;
        this.suit = suit;
    }

    public getValue(): number {
        return this.value;
    }

    public getFace(): string {
        return this.face;
    }

    public getSuit(): string {
        return this.suit;
    }
}

export default Card;