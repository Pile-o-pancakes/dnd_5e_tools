import { SyntheticEvent } from "react";

type InputProps = {
    id: string,
    text?: string,
    name?: string,
    onInput?: (e?: SyntheticEvent<HTMLInputElement>) => void
}

export function RadioInput({
    id,
    text,
    name,
    onInput
}:InputProps) {

    return(
        <>
            <input type="radio" id={ id } name={ name } onInput={ onInput }>
            </input>
            <label htmlFor={ id }>{ text }</label>
            <br></br>
        </>
    )
}