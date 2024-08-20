import { useNavigate } from "react-router-dom";

import { Button } from "@app/button";

export function Plots() {

    const nav = useNavigate();

    function handleClick(link:string) {

        nav(link);
    }

    return(
        <>
            <h1>Plots</h1>

            <Button value="Tillbaka" onClick={ () => handleClick("./..") }></Button>
            <Button value="Ny plot point" onClick={ () => handleClick("/plots/create") }></Button>
        </>
    )
}