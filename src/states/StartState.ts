import { GameController } from "../GameController";
import { Model } from "../Model";
import { BaseGameState } from "./BaseGameState";
import { LostState } from './LostState';

export class StartState extends BaseGameState {

    constructor(controller: GameController) {
        super(controller);
    }

    public gameStart(): void {
        this.controllerRef.showGame();
        this.controllerRef.showScore();
        this.controllerRef.showNbrBall();
    }

    public gameLost(): void {
        this.controllerRef.hideGame();
        this.controllerRef.hideScore();
        this.controllerRef.hideNbrBall();
        const newState: LostState = new LostState(this.controllerRef);
        newState.gameLost();
        this.controllerRef.changeGameState(newState);
    }
}