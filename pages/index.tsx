import React from "react";
import {Button, Htag, P} from "../components";

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag="h1">Текст</Htag>
            <Button appearance="primary" arrow="right">Кнопка</Button>
            <Button appearance="ghost" arrow="right">Кнопка</Button>
            <P size="l">Большой</P>
            <P size="m">Средний</P>
            <P size="s">Маленький</P>
        </>
    );
}

