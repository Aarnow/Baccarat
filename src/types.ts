import Card from "./game/card.js"
import Player from "./game/player.js";


// Types
export type CardValue = Record<string, number>;
export type CardTuple = [Card?, Card?, Card?];
export type BaccaratTable = [Player?, Player?, Player?, Player?];


// Enums
export enum BetOption {
    Banker = 'Banker',
    Player = 'Player',
    Tie = 'Tie'
}

// Interfaces
export interface PlayerStatistics {
    wins: number;
    losses: number;
    winningPercentage: number;
    earning: number;
}

export interface Bet {
    amount: number,
    option: BetOption | null
}