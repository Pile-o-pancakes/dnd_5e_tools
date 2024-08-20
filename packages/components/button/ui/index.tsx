import { SyntheticEvent } from "react";

type ButtonProps = {
    value: string,
    onClick?: (e?: SyntheticEvent<HTMLButtonElement, MouseEvent>) => void,
    disabled?: boolean,
    type?: "button" | "reset" | "submit"
}

export function Button({
    value = "placeholder",
    onClick,
    disabled = false,
    type = "button"
}:ButtonProps) {

    return(
        <>
            <button
                type={ type }
                disabled={ disabled }
                onClick={ onClick }>
                    { value }
            </button>
        </>
    )
}