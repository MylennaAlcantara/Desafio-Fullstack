import React, { useEffect, useState } from "react";
import * as TP from "./style";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Tabela } from "../../components/tabela";

export const TipoProfissional = () => {
    const [profissional, setProfissional] = useState(false);
    
    return(
        <TP.Container>
            <Header setProfissional={setProfissional}/>
            <Tabela profissional={profissional}/>
            <Footer/>
        </TP.Container>
    )
}