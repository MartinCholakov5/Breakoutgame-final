import * as PIXI from "pixi.js";
import { GameView } from "../views/GameView";
import { GameObjectBehavior } from "./behavior/GameObjectBehavior";

export class GameObject extends PIXI.Container {

    protected id: string;
    protected gameViewRef: GameView;
    protected behavior: Map<string, GameObjectBehavior>;
    protected renderer: Map<string, PIXI.DisplayObject>;
    protected active: boolean = false;

    constructor(gameViewRef: GameView) {
        super();
        this.gameViewRef = gameViewRef;
        this.init();
    }

    public setId(id: string) {
        this.id = id;
    }

    public getId() {
        return this.id;
    }

    public destroy() {
        this.renderer.forEach((obj, id) => {
            obj.destroy({texture: true, baseTexture: true});
        });

        this.behavior.forEach((behavior) => {
            behavior.destroy();
        });

        this.behavior.clear();
        this.renderer.clear();
        
        this.gameViewRef = null;
        this.renderer = null;
        this.behavior = null;
    }

    public activate() {
        this.active = true;
    }

    public deactivate() {
        this.active = false;
    }

    public isActive(): Boolean {
        return this.active;
    }

    public getGameViewRef(): GameView {
        return this.gameViewRef;
    }

    public update(deltaTime: number) {
        this.behavior.forEach((behavior, id) => {
            behavior.update(deltaTime);
        });
    }

    public registerRenderable(id: string, renderable: PIXI.DisplayObject) {

        if(this.renderer.has(id)) {
            console.warn("registerRenderable() "+id+" already exist");
            return;
        }

        this.renderer.set(id, renderable);

        this.addChild(renderable);
    }

    public unregisterRenderable(id: string) {
        if(!this.renderer.has(id)) {
            console.warn("unregisterRenderable() "+id+" does not exist");
            return;
        }

        this.removeChild(this.renderer.get(id) as PIXI.DisplayObject);
        this.renderer.delete(id);
    }
    public useRenderable(id:string){
        let renderable = this.getRenderableById(id)
        this.removeChild(this.renderer.get(id) as PIXI.DisplayObject);
        
    }

    public registerBehavior(id: string, behavior: GameObjectBehavior) {
        if(this.behavior.has(id)) {
            console.warn("registerBehavior() "+id+" already exist");
            return;
        }

        this.behavior.set(id, behavior);
    }

    public unregisterBehavior(id: string) {
        if(!this.behavior.has(id)) {
            console.warn("unregisterBehavior() "+id+" does not exist");
            return;
        }

        this.behavior.delete(id);
    }

    public getRenderableById(id: string): PIXI.DisplayObject | null | undefined{
        if(!this.renderer || !this.renderer.has(id)){
            console.warn("getRenderableById() "+id+" does not exist");
            return null;
        }

        return this.renderer.get(id);
    }
    public getBehaviorById(id: string) : GameObjectBehavior {
        if(!this.behavior.has(id)) {
            console.warn("unregisterBehavior() "+id+" does not exist");
            return;
    }
    return this.behavior.get(id);
}   

    protected init() {
        this.renderer = new Map<string, PIXI.DisplayObject>();
        this.behavior = new Map<string, GameObjectBehavior>();
    }
}
