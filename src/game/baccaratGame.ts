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

import { BaccaratTable } from "../types.js";
import Player from "./player.js";
import Deck from "./deck.js"
import Hand from "./hand.js"

class BaccaratGame {
    public puntos: BaccaratTable;
    public deck: Deck;
    public player: Hand;
    public banker: Hand;

    constructor(){
        this.puntos = [];
        this.deck = new Deck();
        this.player = new Hand();
        this.banker = new Hand();
    }

    //add player
    public addPlayer(name: string, seatNumber: number): void {
        let newPlayer : Player = new Player(name);
        if(seatNumber <= 3 && seatNumber >= 0){
            if(!this.puntos[seatNumber]) this.puntos[seatNumber] = newPlayer;
            else console.log('Ce siège est occupé.')
        }
        else console.log("La table est complète.")
    }

    //remove player
    public removePlayer(seatNumber: number): void {
        this.puntos.splice(seatNumber, 1);
    }

    //setHands
    public draw(): void {
        for (let i = 0; i < 2; i++) {
            this.player.addCard(this.deck.dealCard());
            this.banker.addCard(this.deck.dealCard());
        }
    }

    //getWinner

    //startRound

    //placeBet
    public placeBets(bets : number[]): void{
        for (const [index, player] of this.puntos.entries()) {
            if(player) player.setBet(bets[index]);
        }
    }

    //payoutBets
    public payoutBets(): void{
        for (const player of this.puntos) {
            if(player) player.getBet();
            //win ?
        }
    }
}

export default BaccaratGame;