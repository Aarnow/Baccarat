import Card from "./game/card.js"

export type CardValue = Record<string, number>;
export type CardTuple = [Card?, Card?, Card?];
export enum BetOption {
    Banker = 'Banker',
    Player = 'Player',
    Tie = 'Tie'
}