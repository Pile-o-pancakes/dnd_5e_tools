export function modifierCalculator(score: number) {

    const modifier = Math.floor((score - 10) / 2);
    if(modifier > 0) {

        return "(+" + modifier + ")";
    }
    else {

        return "(" + modifier + ")";
    }
}