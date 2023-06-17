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

import { BaccaratTable, BetOption, Bet } from "../types.js";
import Player from "./player.js";
import Deck from "./deck.js"
import Hand from "./hand.js"

class BaccaratGame {
    public puntos: BaccaratTable;
    public deck: Deck;
    public player: Hand;
    public banker: Hand;
    public bankroll: number;

    constructor(){
        this.puntos = [];
        this.deck = new Deck();
        this.player = new Hand();
        this.banker = new Hand();
        this.bankroll = 0;
    }

    //add player
    public addPlayer(player: Player, seatNumber: number): void {
        if(seatNumber <= 3 && seatNumber >= 0){
            if(!this.puntos[seatNumber]) this.puntos[seatNumber] = player;
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
    public getWinner(): BetOption {
        const playerScore = this.player.getTotalValue();
        const bankerScore = this.banker.getTotalValue();

        if (playerScore > bankerScore) {
            return BetOption.Player;
        } else if (playerScore < bankerScore) {
            return BetOption.Banker;
        } else {
            return BetOption.Tie;
        }
    }

    //startRound

    //placeBet
    public placeBets(bets : Bet[]): void{
        for (const [index, player] of this.puntos.entries()) {
            if(player){
                const option = bets[index].option
                if(option) player.setOption(option);
                player.setBet(bets[index].amount);
            }
        }
    }

    //payoutBets
    public payoutBets(): void{
        for (const player of this.puntos) {
            if(player){
                if(this.isBetWon(player)){
                    //récompenser le joueur
                } else {
                    //augmenter bankroll avec le bet du joueur
                    // réinitialiser le bet du joueur
                    // update les statistiques du joueur
                    this.bankroll += player.getBet();
                    player.setStatistics(false);
                    player.resetBet();
                }
            }
        }
    }

    //player win ?
    public isBetWon(player: Player): boolean {
        const result = this.getWinner();
        const playerOption = player.getOption();
        return playerOption === result ? true : false;
    }
}

export default BaccaratGame;