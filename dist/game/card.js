/**
 * Class Card
 *
 * Cette classe représente le modèle d'une carte.
 * Elle fournit des opérations pour manipuler :
 *      - la valeur
 *      - l'enseigne
 *
 * @version : 0.01
 * */
class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    getValue() {
        return Object.values(this.value)[0];
    }
    getName() {
        return Object.keys(this.value)[0];
    }
    getSuit() {
        return this.suit;
    }
}
export default Card;
