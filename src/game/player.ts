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
    private name: string;
    private bet: number;
    private option: BetOption | null;
    private statistics: PlayerStatistics;

    constructor(name: string, statistics?: PlayerStatistics){
        this.name = name;
        this.bet = 0;
        this.option = null;
        this.statistics = statistics ? statistics : this.initializePlayerStatistics()
    }

    private initializePlayerStatistics(): PlayerStatistics{
        return {
            wins: 0,
            losses: 0,
            winningPercentage: 0,
            earning: 0
        }
    }

    public setBet(bet: number): void {
        this.bet = bet;
    }

    public getBet(): number{
        return this.bet;
    }

    public setOption(option: BetOption): void {
        this.option = option;
    }

    public resetBet(): void {
        this.bet = 0;
    }
}

export default Player;