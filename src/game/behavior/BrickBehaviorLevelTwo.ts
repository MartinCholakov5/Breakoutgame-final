import { GameObject } from '../GameObject';
import { EventDispatcher } from '../../EventDispatcher';
import { GameEvents } from '../../GameEvents';
import { BrickType } from '../level/BrickType';
import * as PIXI from 'pixi.js';
import { BaseBrickBehavior } from './BaseBrickBehavior';

export class BrickBehaviorLevelTwo extends BaseBrickBehavior {

    private hitCount: number = 0;


    constructor(gameObjRef: GameObject) {
        super(gameObjRef);
    }
    
    protected onBrickHit(e: any) {
        if (e.brickId === this.gameObjRef.getId()) {
            this.hitCount++;
            
            const renderable: PIXI.Sprite = this.gameObjRef.getRenderableById('brickImg') as PIXI.Sprite;
            switch(this.hitCount) {
                case 1:
                    renderable.tint = 0x0000ff;
                    break;
                case 2:
                    renderable.tint = 0x00ff00;
                    break;
            }

            if (this.hitCount >= 3) {
                EventDispatcher.getInstance().getDispatcher().emit(GameEvents.BRICK_HIDE, { brickId: this.gameObjRef.getId(), brickType: BrickType.TYPE_2 });
         
            }
        }
    }
}