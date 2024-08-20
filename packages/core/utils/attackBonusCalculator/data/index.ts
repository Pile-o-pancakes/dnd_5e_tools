export function attackBonusCalculator(proficiency: string, abilityModifier: string, magicModifier: string) {

    
    const attackBonus = proficiency + abilityModifier + magicModifier;
    return attackBonus;
}