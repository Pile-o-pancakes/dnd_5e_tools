import { SyntheticEvent } from "react";

type InputProps = {
    id: string,
    text?: string,
    defaultValue?: string,
    min?: string,
    max?: string,
    step?: string,
    onChange?: (e?: SyntheticEvent<HTMLInputElement>) => void
}

export function RangeInput({
    id,
    text,
    defaultValue,
    min = "1",
    max = "40",
    step = "1",
    onChange
}:InputProps) {

    return(
        <>
            <input type="range" id={ id } defaultValue={ defaultValue } min={ min } max={ max } step={ step } onChange={ onChange }>
            </input>
            <label htmlFor={ id }>{ text }</label>
            <br></br>
        </>
    )
}