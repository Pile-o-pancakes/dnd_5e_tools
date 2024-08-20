import { useNavigate } from "react-router-dom";

import { Button } from "@app/button";
import { TextInput } from "@app/textinput";

import { plotcardData } from "../../../core/interfaces/plotcard/index.ts";

export function Plotcreator() {

    const nav = useNavigate();

    return(
        <>
            <h1>Plot points</h1>
            <Button value="Tillbaka" onClick={ () => nav("./..") }></Button>

            <TextInput id="plottitle"></TextInput>
            <textarea id="plotdescription"></textarea>
            
        </>
    )
}