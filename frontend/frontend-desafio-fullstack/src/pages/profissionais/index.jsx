import React from "react";
import * as P from "./style";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Tabela } from "../../components/tabela";

export const Profissional = () => {
    return(
        <P.Container>
            <Header/>
            <Tabela/>
            <Footer/>
        </P.Container>
    )
}