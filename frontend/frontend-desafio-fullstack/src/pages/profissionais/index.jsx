import React, { useEffect, useState } from "react";
import * as P from "./style";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Tabela } from "../../components/tabela";

export const Profissional = () => {
    const [profissional, setProfissional] = useState(false);
    return(
        <P.Container>
            <Header setProfissional={setProfissional}/>
            <Tabela profissional={profissional}/>
            <Footer/>
        </P.Container>
    )
}