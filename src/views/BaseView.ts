import * as PIXI from 'pixi.js';
import { gsap } from "gsap";


export class BaseView extends PIXI.Container {

    protected background: PIXI.Graphics;

    constructor() {
        super();

        this.init();
    }

    public show() {
        if (this.visible) {
            return;
        }

        this.visible = true;
        gsap.to(this, { alpha: 1, duration: 0.3 });
    }

    public hide() {
        if (!this.visible) {
            return;
        }

        gsap.to(this, { alpha: 0, duration: 0.3, onComplete: () => { this.visible = false; } });
    }

    protected init() {
        this.visible = false;
        this.alpha = 0;

        this.createBackground();
    }

    protected createBackground() { 
        
    }
}