import { GameController } from "../GameController";
import { IGameState } from "./IGameState";

export class BaseGameState implements IGameState {

    protected controllerRef: GameController;

    constructor(controller: GameController) {
        this.controllerRef = controller;
    }

    public gameStart(): void { }

    

    public gameLost(): void { }

    public gameEnter(): void { }
}