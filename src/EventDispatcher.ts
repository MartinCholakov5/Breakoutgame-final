import * as PIXI from "pixi.js";

export class EventDispatcher {
  private dispatcher: PIXI.utils.EventEmitter;

  private static instance: EventDispatcher;

  private constructor() {
    this.init();
  }

  public static getInstance(): EventDispatcher {
    if (!EventDispatcher.instance) {
      EventDispatcher.instance = new EventDispatcher();
    }

    return EventDispatcher.instance;
  }

  public getDispatcher(): PIXI.utils.EventEmitter {
    return this.dispatcher;
  }

  private init() {
    this.dispatcher = new PIXI.utils.EventEmitter();
  }
}
