/**
 * Class player
 *
 * Cette classe représente le modèle d'un joueur.
 * Elle fournit des opérations pour manipuler un joueur, son pari, et ses gains.
 *
 * @version : 0.01
 * */

import { BetOption } from "../types.js";

class Player {
    private bet: number = 0;
    private betOption: BetOption;

    public getBetOption(): BetOption {
        return this.betOption;
    }

    public getBet(): Number {
        return this.bet;
    }

    public setBet(bet: Number): void {
        this.bet = bet;
    }

    public gain(bet: Number): Number {
        if(bet < 5){
            return bet - 1;
        } else {
            return bet * .9;
        }
    }

}

export default Player;
