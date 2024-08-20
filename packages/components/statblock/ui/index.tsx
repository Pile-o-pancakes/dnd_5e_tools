import "./style.scss";

import { statblockData } from "@app/statblockdata";

export function Statblock(creatureStats: statblockData) {

    const {
        creatureName = "Placeholder",
        creatureSize = "Medium",
        creatureType = "Unknown",
        creatureAlignment = "Unaligned",
        armorClass = 10,
        hitPoints = 0,
        speed = [0, 0, 0, 0],
        abilityScores = [10, 10, 10, 10, 10, 10],
        savingThrows = [],
        skills = [],
        senses,
        languages,
        challengeRating,
        innateSpellcaster,
        spellcaster,
        actions,
        reactions
    } = creatureStats;

    return(
        <>
            <div id="statblock">
                <section id="" className="statSection">
                    <h2 className="singleRow">{ creatureName }</h2>
                    <h4>{ creatureSize } { creatureType }</h4>
                    <h4>{ creatureAlignment }</h4>
                </section>
                <section id="" className="statSection">
                    <h4>{ armorClass }</h4>
                    <h4>{ hitPoints }</h4>
                    <h4>{ speed[0]== 0 ? "Walking: " + speed[0] : "" }</h4>
                    <h4>{ speed[1]== 0 ? "Swimming: " + speed[1] : "" }</h4>
                    <h4>{ speed[2]== 0 ? "Climbing: " + speed[2] : "" }</h4>
                    <h4>{ speed[3]== 0 ? "Flying: " + speed[3] : "" }</h4>
                    <h4>{ speed[4]== 0 ? "Burrowing: " + speed[4] : "" }</h4>
                </section>
                <section id="" className="statSection">
                    <h4>STR</h4>
                    <h4>DEX</h4>
                    <h4>CON</h4>
                    <h4>INT</h4>
                    <h4>WIS</h4>
                    <h4>CHA</h4>
                    <p>{ abilityScores[0] }</p>
                    <p>{ abilityScores[1] }</p>
                    <p>{ abilityScores[2] }</p>
                    <p>{ abilityScores[3] }</p>
                    <p>{ abilityScores[4] }</p>
                    <p>{ abilityScores[5] }</p>
                </section>
                <section id="skills" className="statSection">
                    <h4>Saving throws</h4>
                    <p>
                        { skills.map((proficientSkill) => {

                            return <></>
                        }) }
                    </p>
                    <h4>Skills</h4>
                    <p></p>
                    <h4>Senses</h4>
                    <p></p>
                    <h4>Languages</h4>
                    <p></p>
                    <h4>Challenge</h4>
                    <p></p>
                </section>
                <section id="spellcasting" className="statSection">
                    <h4>Innate spellcasting</h4>{ /*TODO: Map ut alla spell level slots, och rendera de som finns*/ }
                    <p>Spell casting ability och Spell save DC</p>
                    <h4>Spellcasting</h4>
                    <p>Spell casting ability och Spell save DC</p>
                </section>
                <section id="actions" className="statSection">
                    <h3 className="header">Actions</h3>
                    <h4>Weapon</h4>
                    <p>Bonuses och yada yada</p>
                </section>
                <section id="reactions" className="statSection">
                    <h3 className="header">Reactions</h3>
                    <h4>Stuff</h4>
                </section>
                <section id="features" className="statSection">
                    <h3 className="header">Features</h3>
                    <h4>Stuff</h4>
                </section>
            </div>
        </>
    )
}