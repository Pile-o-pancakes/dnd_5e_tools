export interface statblockData {
    creatureName: string,
    creatureSize: string,
    creatureType: string,
    creatureAlignment: string,
    armorClass: number,
    hitPoints: number,
    speed: number[],
    abilityScores: number[],
    savingThrows: boolean[],
    skills: boolean[],
    senses: number[],
    languages: boolean[],
    challengeRating: number,
    innateSpellcaster: {
        isCaster: boolean,
        castingModifier: string,
        spells: {
            0: {

            },
            1: {

            },
            2: {

            },
            3: {

            },
            4: {

            },
            5: {

            },
            6: {

            },
            7: {

            }, 8: {

            },
            9: {

            }
        }
    },
    spellcaster: {
        isCaster: boolean,
        castingModifier: string,
        spells: {
            
        }
    },
    actions: {
        
    },
    reactions: {
        
    }
}