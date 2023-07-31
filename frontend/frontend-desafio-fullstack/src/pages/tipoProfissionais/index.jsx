import React from "react";
import * as TP from "./style";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Tabela } from "../../components/tabela";

export const TipoProfissional = () => {
    return(
        <TP.Container>
            <Header/>
            <Tabela/>
            <Footer/>
        </TP.Container>
    )
}