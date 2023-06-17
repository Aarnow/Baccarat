/**
 * Class Player
 *
 * Cette classe représente le modèle d'un joueur.
 * Elle fournit des opérations pour manipuler :
 *      - le pari
 *      - le choix
 *      - les stats
 *
 * @version : 0.01
 * */

import { BetOption, PlayerStatistics } from "../types.js"

class Player {
    private bet: number;
    private option: BetOption;
    private statistics: PlayerStatistics;

    constructor(bet: number, option: BetOption, statistics: PlayerStatistics){
        this.bet = bet;
        this.option = option;
        this.statistics = statistics;
    }

    public setBet(bet: number): void {
        this.bet = bet;
    }

    public setOption(option: BetOption): void {
        this.option = option;
    }

    public resetBet(): void {
        this.bet = 0;
    }
}

export default Player;