import { GameObject } from './game/GameObject';
import * as PIXI from 'pixi.js';
import { EventDispatcher } from './EventDispatcher';
import { GameEvents } from './GameEvents';
import { GameObjectBehavior } from './game/behavior/GameObjectBehavior';
import { BrickBehaviorLevelOne } from './game/behavior/BrickBehaviorLevelOne';
import { BrickBehaviorLevelTwo } from './game/behavior/BrickBehaviorLevelTwo';
import { BrickBehaviorLevelThree } from './game/behavior/BrickBehaviorLevelThree';
import { BrickType } from './game/level/BrickType';


export class CollisionManager {
    
    private brickList: Array<GameObject> = [];
    private ballRef: GameObject;

    constructor() {

    }

    public registerBrickObj(gameObj: GameObject) {
        this.brickList.push(gameObj);
    }
    public registerBall(gameObj: GameObject) {
        this.ballRef = gameObj;
    }
    public clear() {
        this.brickList = [];
    }
    public unRegisterBrickObj(brickId: string) {
        this.brickList.forEach((obj, i) => {
            if (obj.getId() === brickId) {
                this.brickList.splice(i, 1);
                return;
            }
        });
    }
    public update() {
        if (!this.ballRef) {
            return;
        }
        const ballRect: PIXI.Rectangle = new PIXI.Rectangle(this.ballRef.x - this.ballRef.width, this.ballRef.y - this.ballRef.width, this.ballRef.width, this.ballRef.height);
        this.brickList.forEach((obj) => {
            const brickRect: PIXI.Rectangle = new PIXI.Rectangle(obj.x, obj.y, obj.width, obj.height);
            
            if (ballRect.left <= brickRect.right &&
                brickRect.left <= ballRect.right &&
                ballRect.top <= brickRect.bottom &&
                brickRect.top <= ballRect.bottom) {
                    
                    const behavior: GameObjectBehavior = obj.getBehaviorById('brickBehavior')
                    
                    let brickType: BrickType;
                    
                    if(behavior instanceof BrickBehaviorLevelOne){
                        brickType = BrickType.TYPE_1
                    }else if(behavior instanceof BrickBehaviorLevelTwo){
                        brickType = BrickType.TYPE_2
                    }else if(behavior instanceof BrickBehaviorLevelThree){
                        brickType = BrickType.TYPE_3
                    }
                    EventDispatcher.getInstance().getDispatcher().emit(GameEvents.BRICK_HIT, { brickId: obj.getId(), brickType: brickType});
                    
            }

        });
    }
}