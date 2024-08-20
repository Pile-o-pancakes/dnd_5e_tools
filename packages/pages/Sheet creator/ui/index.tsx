import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@app/button";
import { CheckboxInput } from "@app/checkboxinput";
import { RangeInput } from "@app/rangeinput";
import { TextInput } from "@app/textinput";

import { modifierCalculator } from "@app/modifiercalculator";

import { abilities } from "../../../core/arrays/abilities.ts";
import { alignment } from "../../../core/arrays/alignment.ts";
import { creatureTypes } from "../../../core/arrays/creatureTypes.ts";
import { damageTypes } from "../../../core/arrays/damageTypes.ts";
import { languages } from "../../../core/arrays/languages.ts";
import { movementTypes } from "../../../core/arrays/movementTypes.ts";
import { senses } from "../../../core/arrays/senses.ts";
import { sizes } from "../../../core/arrays/sizes.ts";
import { skills } from "../../../core/arrays/skills.ts";

import "./style.scss";

export function Sheetcreator() {

    const [allowReset, setAllowReset] = useState(false);

    // const [ allSpells, setAllSpells ] = useState();

    // const getSpells = new Promise((resolve) => {

    //     const result = fetch("https://www.dnd5eapi.co/api/spells")
    //     .then(async result => await result.json()
    //     .then(data => resolve(data)))
    //     .catch();
    // });

    // useEffect(() => {

    //     const spellList = getSpells;
    //     setAllSpells(spellList);
    //     console.log();
    // }, []);

    const [ creatureName, setCreatureName ] = useState<string>("");
    const [ creatureSize, setCreatureSize ] = useState<string>("");
    const [ creatureType, setCreatureType ] = useState<string>("");
    const [ creatureAlignment, setCreatureAlignment ] = useState<string>("");

    const [ creatureArmorClass, setCreatureArmorClass ] = useState<string>("10");
    const [ creatureHealth, setCreatureHealth ] = useState<string>("0");
    const [ creatureSpeed, setCreatureSpeed ] = useState<string[]>(["0", "0", "0", "0", "0"]);

    const [ creatureAbilityScores, setCreatureAbilityScores ] = useState<string[]>(["10", "10", "10", "10", "10", "10"]);
    const [ creatureSavingThrows, setCreatureSavingThrows ] = useState<boolean[]>([false, false, false, false, false, false]);
    const [ creatureSkills, setCreatureSkills ] = useState<boolean[]>(Array(13).fill([false]));

    const [ creatureResistances, setCreatureResistances ] = useState<boolean[]>([false, false, false, false, false, false, false, false, false, false, false, false, false]);
    const [ creatureVulnerabilities, setCreatureVulnerabilities ] = useState<boolean[]>([false, false, false, false, false, false, false, false, false, false, false, false, false]);
    const [ creatureImmunities, setCreatureImmunities ] = useState<boolean[]>([false, false, false, false, false, false, false, false, false, false, false, false, false]);

    const [ creatureSenses, setCreatureSenses ] = useState<string[]>(["0", "0", "0", "0"]);
    const [ creatureTelepathy, setCreatureTelepathy ] = useState<string>("0");
    const [ creatureLanguages, setCreatureLanguages ] = useState<boolean[]>([]);
    const [ creatureChallengeRating, setcreatureChallengeRating ] = useState<string>();

    const [ isInnateSpellcaster, setIsInnateSpellcaster ] = useState<boolean>(false);
    const [ innateSpells, setInnateSpells ] = useState<object>({
        spellcastAbility: "",
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: []
    });
    const [ isSpellcaster, setIsSpellcaster ] = useState<boolean>(false);
    const [ spells, setSpells ] = useState<object>({
        spellcastAbility: "",
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: []
    });

    const [ actionList, setactionList ] = useState<boolean>(false);

    function handleOnChangeString(event: React.SyntheticEvent<HTMLInputElement> |
        React.ChangeEvent<HTMLSelectElement>,
        setState: React.Dispatch<React.SetStateAction<string>>) {

            const value = (event.target as HTMLInputElement).value;
            setState(value);
    }

    function handleOnChangeStringArray(event: React.SyntheticEvent<HTMLInputElement> |
        React.ChangeEvent<HTMLSelectElement>,
        currentState: Array<string>,
        setState: React.Dispatch<React.SetStateAction<string[]>>,
        index: number) {

            const value = (event.target as HTMLInputElement).value;
            currentState[index] = value;
            setState([ ...currentState ]);
    }

    function handleOnChecked(currentState: boolean,
        setState: React.Dispatch<React.SetStateAction<boolean>>) {

            setState(!currentState);
    }

    function handleOnCheckedArray(currentState: Array<boolean>,
        setState: React.Dispatch<React.SetStateAction<boolean[]>>,
        index: number) {

            currentState[index] = !currentState[index];
            setState([ ...currentState ]);
    }

    const nav = useNavigate();
    
    return(
        <>
            <Button value={ "Tillbaka" } onClick={ () => nav("..") }/>
            <h1>Stat block creator</h1>

            <form>
                <section id="block_1">
                    <TextInput id="creatureName" text="Creature name" onChange={ (e) => handleOnChangeString(e!, setCreatureName) }/>

                    <h3>Creature type</h3>
                    <select onChange={ (e) => handleOnChangeString(e!, setCreatureType) }>
                        { creatureTypes.map((type: string, i: number) => {

                            return <option key={ i }>{ type }</option>
                        })}
                    </select>

                    <h3>Size</h3>
                    <section className="creatureSize">
                        <select onChange={ (e) => handleOnChangeString(e!, setCreatureSize) }>
                            { sizes.map((size, i) => {
                                return <option key={ i }>{ size }</option>
                            })}
                        </select>
                    </section>

                    <section className="creatureAlignment">
                        <h3>Alignment</h3>
                        <select onChange={ (e) => { handleOnChangeString(e!, setCreatureAlignment) } }>
                            { alignment.map((moral: string, i) => {

                                return <option key={ i }>{ moral }</option>
                            }) }
                        </select>
                        
                    </section>
                </section>

                <section className="block_2">
                    <h3>Basic stats</h3>
                    <RangeInput id="creatureAC" text="Armor class" min="0" max="30" onChange={ (e) => handleOnChangeString(e!, setCreatureArmorClass) }/>
                    <p>{ creatureArmorClass }</p>
                    <TextInput id="creatureHealth" text="Health" onChange={ (e) => handleOnChangeString(e!, setCreatureHealth) }/>

                    { movementTypes.map((speedType, i) => {
                        return <div key={ i }>
                            <RangeInput id={ "creature" +  speedType + "speed" } defaultValue="0" text={ speedType } min="0" max="100" step="5" onChange={ (e) => handleOnChangeStringArray(e!, creatureSpeed, setCreatureSpeed, i) }/>
                            <p>{ creatureSpeed[i] }</p>
                        </div>
                    })}
                </section>

                <section className="block_3">
                    <h3>Ability scores</h3>
                    { abilities.map((ability, i) => {
                        return <div key={ i }>
                            <RangeInput id={ ability + "Score" } text={ ability } max="30" onChange={ (event) => handleOnChangeStringArray(event!, creatureAbilityScores, setCreatureAbilityScores, i) }/>
                            <p>{ creatureAbilityScores[i] + " " + modifierCalculator(Number(creatureAbilityScores[i])) }</p>
                        </div>
                    })}
                </section>

                <section className="block_4">
                    <h3>Saving throws</h3>
                    { abilities.map((ability, i) => {

                        return <CheckboxInput id={ ability + "saveText" } text={ ability } key={ i } onChange={ () => handleOnCheckedArray(creatureSavingThrows, setCreatureSavingThrows, i) }/>
                    })}

                    <h3>Skills</h3>
                    { skills.map((skill, i) => {
                        
                        return <CheckboxInput id={ skill + "Text" } text={ skill } key={ i } onChange={ () => handleOnCheckedArray(creatureSkills, setCreatureSkills, i) }/>
                    })}

                    <h3>Resistances</h3>
                    { damageTypes.map((type, i) => {

                        return <CheckboxInput key={ i } id={ "resistance" + type } text={ type } onChange={ () => handleOnCheckedArray(creatureResistances, setCreatureResistances, i) }/>
                    })}

                    <h3>Vulnerabilities</h3>
                    { damageTypes.map((type, i) => {

                        return <CheckboxInput key={ i } id={ "vulnerability" + type } text={ type } onChange={ () => handleOnCheckedArray(creatureVulnerabilities, setCreatureVulnerabilities, i) }/>
                    })}

                    <h3>Immunities</h3>
                    { damageTypes.map((type, i) => {

                        return <CheckboxInput key={ i } id={ "immunities" + type } text={ type } onChange={ () => handleOnCheckedArray(creatureImmunities, setCreatureImmunities, i) }/>
                    })}

                    <h3>Senses</h3>
                    { senses.map((sense, i) => {
                        return <div key={ i }>
                            <RangeInput key={ i } id={ "sense" + sense } defaultValue="0" min="0" max="200" step="5" onChange={ (e) => handleOnChangeStringArray(e!, creatureSenses, setCreatureSenses, i) }/>
                            <p>{ creatureSenses[i] }</p>
                        </div>
                    })}

                    <h3>Languages</h3>
                    <CheckboxInput id="nonverbal" text="Non verbal"/>
                    <RangeInput id="telepathic" text="Telepathic" defaultValue="0" min="0" max="200" step="5" onChange={ (e) => handleOnChangeString(e!, setCreatureTelepathy) }/>
                    <p>{ creatureTelepathy }</p>
                    { languages.map((language, i) => {
                        return <CheckboxInput id={ language + "Box" } text={ language } key={ i } onChange={ () => handleOnCheckedArray(creatureLanguages, setCreatureLanguages, i) }/>
                    })}
                </section>

                <section className="block_5">
                    <CheckboxInput id="innateSpellcast" text="Innate spellcasting" onChange={ () => handleOnChecked(isInnateSpellcaster, setIsInnateSpellcaster) }/>

                    <select>
                        <option></option> { /*TODO: fetcha alla spells och rendera*/}
                    </select>

                    <CheckboxInput id="spellcaster" text="Spellcaster" onChange={ () => handleOnChecked(isSpellcaster, setIsSpellcaster) }/>

                    { /*TODO: fetcha alla spells och rendera*/}

                    {/*<select onChange={ (e) => handleOnChangeStringArray(e!, creature)>
                        { abilities.map((ability, i) => {

                            return <option key={ i }></option>
                        })}
                    </select>*/}
                
                </section>

                <section className="block_6">

                    <TextInput id="actionName" text="Vapen/Action"/>

                    <select>
                        { damageTypes.map((type, i) => {

                            return <option key={ i }>{ type }</option>
                        })}
                    </select>

                    <Button value="Lägg till action"/>

                    <CheckboxInput id="multiattackcheck" text="Har multiattack"/>

                    { /* => {

                        return <div key={ i }>
                            <p>{ action.name }</p>
                            <p>{ action.attackBonus }</p>
                            <p>{ action.damageType }</p>
                        </div>
                    })*/}
                        { //TODO: funktion för att (in)aktivera rullistan, och läsa in alla attack actions
                        }
                </section>

                <section className="block_7">

                </section>

                <CheckboxInput id="allowReset" text="Återställ alla värden?" onChange={ () => setAllowReset(!allowReset) } />
                <Button value="Återställ allt" type="reset" disabled={ !allowReset } />
            </form>
        </>
    )
}