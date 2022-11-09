export class Model {

    private totalNbrBal: number = 0;
    private currentLevel: number = 0;
    private score: number = 0;
    private totalNbrBrick: number = 0;

    private static instance: Model;

    public static getInstance(): Model {
        if(!this.instance) {
            this.instance = new Model();
        }

        return this.instance;
    }
    
    public resetGame() {
        this.totalNbrBal = 5;
        this.score = 0;
        this.currentLevel = 1;
    }

    public setTotalNbrBrick(total: number) {
        this.totalNbrBrick = total;
    }

    public decrementTotalNbrBrick() {
        this.totalNbrBrick--;
    }

    public getTotalNbrBrick(): number {
        return this.totalNbrBrick;
    }

    public getTotalNbrBall(): number {
        return this.totalNbrBal;
    }

    public decrementNbrBall() {
        this.totalNbrBal--;
    }

    public incrementNbrBall() {
        this.totalNbrBal++;
    }

    public getCurrentLevel(): number {
        return this.currentLevel;
    }

    public incrementLevel(): number {
        return this.currentLevel++;
    }

    public getScore(): number {
        return this.score;
    }

    public addScore(score: number) {
        this.score += score;
    }
}