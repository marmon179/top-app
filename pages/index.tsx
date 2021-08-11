import React from "react";
import {Button, Htag, P} from "../components";

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag="h1">Текст</Htag>
            <Button appearance="primary">Кнопка</Button>
            <Button appearance="ghost">Кнопка</Button>
            <P size="s">Маленький</P>
            <P size="m">Средний</P>
            <P size="l">Большой</P>
        </>
    );
}

