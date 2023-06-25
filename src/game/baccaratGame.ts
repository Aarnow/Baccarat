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
import {addLineGameCopyClipboard, addLineGameView} from "../utils/ViewUtils.js";

class BaccaratGame {
    public puntos: BaccaratTable;
    public deck: Deck;
    public player: Hand;
    public banker: Hand;
    public result: BetOption | null;
    public bankroll: number;

    constructor(){
        this.puntos = [undefined, undefined, undefined, undefined];
        this.deck = new Deck();
        this.player = new Hand();
        this.banker = new Hand();
        this.result = null;
        this.bankroll = 0;
    }

    public addPlayer(player: Player, seatNumber: number): void {
        if(seatNumber <= 3 && seatNumber >= 0){
            if(!this.puntos[seatNumber]) this.puntos[seatNumber] = player;
            else console.log('Ce siège est occupé.')
        }
        else console.log("La table est complète.")
    }

    public removePlayer(seatNumber: number): void {
        this.puntos[seatNumber] = undefined;
    }

    public draw(): void {
        for (let i = 0; i < 2; i++) {
            this.player.addCard(this.deck.dealCard());
            this.banker.addCard(this.deck.dealCard());

            const pickPlayerCard = this.player.getCards()[i];
            const pickBankerCard = this.banker.getCards()[i]
            if (pickPlayerCard && pickBankerCard){
                addLineGameView(
                    "Le joueur tire la carte : " + pickPlayerCard.getName() + " " + pickPlayerCard.getSuit() +
                    ", et le banquier tire la carte : " + pickBankerCard.getName() + " " + pickBankerCard.getSuit()
                );
            }
        }
        addLineGameCopyClipboard(this.player, this.banker);
    }

    public getResult(): BetOption | null {
        return this.result;
    }

    public setResult(): void {
        if (this.player.score > this.banker.score) {
            this.result = BetOption.Player;
        } else if (this.player.score < this.banker.score) {
            this.result = BetOption.Banker;
        } else {
            this.result = BetOption.Tie;
        }
        addLineGameView("Le " + this.result + " remporte la partie.");
        this.payoutBets();
    }

    public placeBets(bets : Bet[]): void{
        for (const [index, player] of this.puntos.entries()) {
            if(player){
                const option = bets[index].option;
                if(option) player.setOption(option);
                player.setAmount(bets[index].amount);
            }
        }
        addLineGameView("Les paris sont fermés.");
    }

    public payoutBets(): void{
        for (const player of this.puntos) {
            if(player){
                if(this.isBetWon(player)){
                    this.bankroll -= player.calcPayout();
                    player.setStatistics(true);
                } else {
                    this.bankroll += player.getAmount();
                    player.setStatistics(false);
                }
                player.resetBet();
            }
        }
        this.player.clearHand();
        this.banker.clearHand();
    }

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
        let thirdPlayerCard = this.player.getCards()[2];

        if(this.player.score <= 5){
            this.player.addCard(this.deck.dealCard())
            addLineGameView("Le score des deux premières cartes du joueur se situe entre 0 et 5, le joueur tire une troisième carte.");
            addLineGameView("Le joueur tire une carte : " + thirdPlayerCard?.getName());
            addLineGameCopyClipboard(this.player, this.banker);
            this.checkBankerDraw()
        } else if(this.banker.score <= 5) {
            this.banker.addCard(this.deck.dealCard())
            addLineGameView("Le banquier tire une carte : " + thirdPlayerCard?.getName());
            addLineGameCopyClipboard(this.player, this.banker);
            this.setResult();
        } else this.setResult();      
    }

    public checkBankerDraw(): void{
        const thirdPlayerCardValue = this.player.getCards()[2]?.getValue();
        const bankerCards = this.banker.getCards();
        const thirdBankerCard = this.banker.cards[2]
        console.log(this.banker.cards)
        console.log("testtt", thirdBankerCard)
        if(thirdPlayerCardValue){
            if(this.banker.score <= 2 || this.banker.score === 3 && thirdPlayerCardValue !== 8){
                this.banker.addCard(this.deck.dealCard())
                addLineGameView("Le banquier tire une carte : " + thirdBankerCard?.getName());
                addLineGameCopyClipboard(this.player, this.banker);
            } else if (thirdPlayerCardValue <= 7){
                if ((this.banker.score === 4 && thirdPlayerCardValue >= 2) || (this.banker.score === 5 && thirdPlayerCardValue >= 4) || (this.banker.score === 6 && thirdPlayerCardValue >= 6)) {
                    this.banker.addCard(this.deck.dealCard());
                    this.banker.score === 4 ?
                        addLineGameView("Le score du banquier est de 4 et le joueur a tirer une troisième carte entre 2 et 7, le banquier tire une carte.") :
                        this.banker.score === 5 ?
                            addLineGameView("Le score du banquier est de 5 et le joueur a tirer une troisième carte entre 4 et 7, le banquier tire une carte.") :
                            addLineGameView("Le score du banquier est de 6 et le joueur a tirer une troisième carte entre 6 et 7, le banquier tire une carte.");
                    addLineGameView("Le banquier tire une carte : " + thirdBankerCard?.getName());
                    addLineGameCopyClipboard(this.player, this.banker);
                }
            } 
        } else if(this.banker.score <= 2){
            this.banker.addCard(this.deck.dealCard())
            addLineGameView("Le score des deux premières cartes du banquier se situe entre 0 et 2, le banquier tire une troisième carte.")
            addLineGameView("Le banquier tire une carte : " + thirdBankerCard?.getName());
            addLineGameCopyClipboard(this.player, this.banker);
        }

        this.setResult();
    }
}

export default BaccaratGame;