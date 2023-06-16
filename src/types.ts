import Card from "./game/card.js"


// Types
export type CardValue = Record<string, number>;
export type CardTuple = [Card?, Card?, Card?];


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