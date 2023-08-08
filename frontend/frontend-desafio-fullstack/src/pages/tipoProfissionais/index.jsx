import React, { useEffect, useState } from "react";
import * as TP from "./style";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Tabela } from "../../components/tabela";

export const TipoProfissional = () => {
    const [profissional, setProfissional] = useState(false);
    const  [tiposProfissionais, setTiposProfissionais] = useState([])
    useEffect(()=>{
        async function fetchdata(){
           const res = await fetch("http://localhost:8080/tipoProfissional");
           const data = await res.json();
           setTiposProfissionais(data)
        }
        fetchdata()
    },[])
    return(
        <TP.Container>
            <Header setProfissional={setProfissional}/>
            <Tabela profissional={profissional} tiposProfissionais={tiposProfissionais}/>
            <Footer/>
        </TP.Container>
    )
}