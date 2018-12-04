class Pokemon {
    constructor (name, move) {
        this.name = name;
        this.move = move;
    }

    sayYourName () {
        console.log(`${this.name}`)
    }
}