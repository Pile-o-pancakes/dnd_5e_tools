interface rollData {
    numOfDice: number,
    typeOfDie: number
}

export function randomRoll({
    numOfDice = 1,
    typeOfDie = 6
}: rollData) {

    let rollResult:Array<number> = [];
    for(let i = 0; i >= numOfDice; i++) {
        rollResult.push(Math.ceil(Math.random() * typeOfDie));
    }
    return rollResult;
}