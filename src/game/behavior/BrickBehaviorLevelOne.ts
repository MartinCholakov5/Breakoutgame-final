import { GameObject } from '../GameObject';
import { EventDispatcher } from '../../EventDispatcher';
import { GameEvents } from '../../GameEvents';
import { BrickType } from '../level/BrickType';
import { BaseBrickBehavior } from './BaseBrickBehavior'
import { Howl } from 'howler';

export class BrickBehaviorLevelOne extends BaseBrickBehavior {

    constructor(gameObjRef: GameObject) {
        super(gameObjRef);
    }

    protected onBrickHit(e: any) {
        if (e.brickId === this.gameObjRef.getId()) {
            EventDispatcher.getInstance().getDispatcher().emit(GameEvents.BRICK_HIDE, { brickId: this.gameObjRef.getId(), brickType: BrickType.TYPE_1 });
        } 
        const sound = new Howl({
            src: ['assets/sounds/mixkit-falling-hit-on-gravel-756.wav']
            });
            sound.volume(0.008);
            sound.play();
    }
}