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
    public result: BetOption | null;
    public bankroll: number;

    constructor(){
        this.puntos = [];
        this.deck = new Deck();
        this.player = new Hand();
        this.banker = new Hand();
        this.result = null;
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
    public setResult(): void {
        if (this.player.score > this.banker.score) {
            this.result = BetOption.Player;
        } else if (this.player.score < this.banker.score) {
            this.result = BetOption.Banker;
        } else {
            this.result = BetOption.Tie;
        }

        this.payoutBets();
    }

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
                    this.bankroll -= player.calcPayout();
                    player.setStatistics(true);
                } else {
                    this.bankroll += player.getBet();
                    player.setStatistics(false);
                }
                player.resetBet();
            }
        }
    }

    //player win ?
    public isBetWon(player: Player): boolean {
        const playerOption = player.getOption();
        return playerOption === this.result ? true : false;
    }

    public isNatural(): void {
        if(this.player.score >= 8 || this.banker.score >= 8){
            this.setResult();
        } else {
            this.checkPlayerDraw()
        }
    }

    public checkPlayerDraw(): void {
        if(this.player.score <= 5){
            this.player.addCard(this.deck.dealCard())
            this.checkBankerDraw()
        } else if(this.banker.score <= 5) {
            this.banker.addCard(this.deck.dealCard())
            this.setResult();
        } else this.setResult();      
    }

    public checkBankerDraw(): void{
        const thirdPlayerCard = this.player.getCards()[2]?.getValue();
        
        if(thirdPlayerCard){
            if(this.banker.score <= 2 || this.banker.score === 3 && thirdPlayerCard !== 8){
                this.banker.addCard(this.deck.dealCard())
            } else if (thirdPlayerCard <= 7){
                if ((this.banker.score === 4 && thirdPlayerCard >= 2) ||
                    (this.banker.score === 5 && thirdPlayerCard >= 4) ||
                    (this.banker.score === 6 && thirdPlayerCard >= 6)) 
                    this.banker.addCard(this.deck.dealCard())
            } 
        }

        this.setResult();
    }
}

export default BaccaratGame;