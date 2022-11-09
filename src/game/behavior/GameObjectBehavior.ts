import { GameObject } from "../GameObject";

export class GameObjectBehavior {

    protected gameObjRef: GameObject;

    constructor(gameObjRef: GameObject) {
        this.gameObjRef = gameObjRef;

        this.init();
    }

    public update(deltaTime: number) {}

    public destroy() {}

    protected init() {}
}