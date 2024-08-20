import { SyntheticEvent } from "react";

type InputProps = {
    id: string,
    className?: string,
    text?: string,
    disabled?: boolean,
    name?: string,
    onChange?: (e?: SyntheticEvent<HTMLInputElement>) => void
}

export function TextInput({
    id,
    className,
    text,
    disabled = false,
    onChange
}:InputProps) {

    return(
        <>
            <input type="text" id={ id } className={ className } disabled={ disabled } onChange={ (e) => onChange!(e) }>
            </input>
            <label htmlFor={ id }>{ text }</label>
            <br></br>
        </>
    )
}