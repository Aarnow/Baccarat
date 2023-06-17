/**
 * Class Baccarat
 *
 * Cette classe représente le modèle d'une partie de Baccarat.
 * Elle fournit des opérations pour manipuler :
 *      - des joueurs
 *      - le deck
 *      - leurs mains.
 *
 * @version : 0.01
 * */

import Player from "./player.js"
import Deck from "./deck.js"
import Hand from "./hand.js"

class BaccaratGame {
    private puntos: Player[];
    private deck: Deck;
    private playerHand: Hand;
    private bankerHand: Hand;

    constructor(puntos: Player[], deck: Deck, playerHand: Hand, bankerHand: Hand){
        this.puntos = [];
        this.deck = new Deck();
        this.playerHand = new Hand();
        this.bankerHand = new Hand();
    }
}

export default BaccaratGame;