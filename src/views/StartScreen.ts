import * as PIXI from 'pixi.js';
import { BaseView } from "./BaseView";
import { GameApplication } from "../GameApplication";
import { EventDispatcher } from "../EventDispatcher";
import { GameEvents } from "../GameEvents";


export class StartScreen extends BaseView {
    private title: PIXI.Text;
    private description: PIXI.Text;

    constructor() {
        super();
    }

    protected init() {
        super.init();
        this.createText();

    }

    protected createBackground() {
        this.background = new PIXI.Graphics();
        this.background.lineStyle({ width: 2, color: 0xffffff });
        this.background.beginFill(0x0000000);
        this.background.drawRect(0, 0, GameApplication.STAGE_WIDTH, GameApplication.STAGE_HEIGHT);
        this.background.endFill();
        this.background.cacheAsBitmap = true;
        this.addChild(this.background);
    }
    private createText() {
        this.title = new PIXI.Text('BREAKOUT GAME', {
            fontFamily: 'Minecraft',
            fill: 0xffffff,
            fontSize: 40
        });
        this.title.resolution = 2;

        this.title.anchor.set(0.5);
        this.title.x = this.background.width * 0.5;
        this.title.y = 200;
        this.addChild(this.title);

        this.description = new PIXI.Text('PRESS ANY KEY TO START', {
            fontFamily: 'Minecraft',
            fill: 0xffffff,
            fontSize: 25
        });
        this.description.resolution = 2;
        this.description.anchor.set(0.5);
        this.description.x = this.background.width * 0.5;
        this.description.y = this.title.y + 40;
        this.addChild(this.description);
    }


}