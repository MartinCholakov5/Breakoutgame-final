import * as PIXI from "pixi.js";
import { GameController } from "./GameController";


export class GameApplication extends PIXI.Application {

    public static STAGE_WIDTH = 800;
    public static STAGE_HEIGHT = 600;

    private gameController: GameController;

    private static app: GameApplication;

    constructor() {
        super(GameApplication.getAppOptions());
        this.init();
    }

    public static getApp(): GameApplication {
        return this.app;
    }

    private init() {
        GameApplication.app = this;

        this.gameController = new GameController();
        this.stage.addChild(this.gameController);

        window.onload = () => {
            const gameContainer: HTMLCanvasElement = document.getElementById("gameContainer") as HTMLCanvasElement;
            gameContainer.appendChild(this.view);

            this.resizeCanvas();

            this.view.style.position = 'absolute';
            this.view.style.left = '50%';
            this.view.style.top = '50%';
            this.view.style.transform = 'translate3d( -50%, -50%, 0 )';
        };
    }

    private static getAppOptions() {
        return {
            backgroundColor: 0xff0000,
            width: GameApplication.STAGE_WIDTH,
            height: GameApplication.STAGE_HEIGHT,
        };
    }

    private resizeCanvas(): void {
        const resize = () => {
            this.renderer.resize(GameApplication.STAGE_WIDTH, GameApplication.STAGE_HEIGHT);
        };

        resize();

        window.addEventListener("resize", resize);
    }

}