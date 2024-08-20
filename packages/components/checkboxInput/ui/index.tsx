import { SyntheticEvent } from "react";

type InputProps = {
    id: string,
    text?: string,
    checked?: boolean,
    onChange?: (e?: SyntheticEvent<HTMLInputElement>) => void
}

export function CheckboxInput({
    id,
    text,
    checked,
    onChange
}:InputProps) {

    return(
        <>
            <input type="checkbox" id={ id } checked={ checked } onChange={ onChange }>
            </input>
            <label htmlFor={ id }>{ text }</label>
            <br></br>
        </>
    )
}