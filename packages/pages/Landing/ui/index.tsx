import { useNavigate } from "react-router-dom";

import { Button } from "@app/button";

export function Landing() {

    const nav = useNavigate();

    function handleClick(link:string) {

        nav(link);
    }

    return(
        <>
            <h1>DnD helper</h1>

            <Button value={ "Character sheets" } onClick={ () => handleClick("/sheets") }/>
            <Button value={ "Plot points" } onClick={ () => handleClick("/plots") }/>
        </>
    )
}