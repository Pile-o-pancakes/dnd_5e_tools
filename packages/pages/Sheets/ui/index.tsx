import { useNavigate } from "react-router-dom";
import { Button } from "@app/button";

export function Sheets() {

    const nav = useNavigate();

    return(
        <>
            <Button value={ "Tillbaka" } onClick={ () => nav("..") }/>
            <Button value={ "Skapa ett nytt stat block" } onClick={ () => nav("/sheets/create") }/>
        </>
    )
}