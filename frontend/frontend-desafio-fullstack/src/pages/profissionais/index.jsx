import React, { useEffect, useState } from "react";
import * as P from "./style";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Tabela } from "../../components/tabela";

export const Profissional = () => {
    const [profissional, setProfissional] = useState(true);
    const  [profissionais, setProfissionais] = useState([])
    useEffect(()=>{
        async function fetchdata(){
           const res = await fetch("http://localhost:8080/profissional");
           const data = await res.json();
           setProfissionais(data)
        }
        fetchdata()
    },[])
    return(
        <P.Container>
            <Header setProfissional={setProfissional}/>
            <Tabela profissional={profissional} profissionais={profissionais}/>
            <Footer/>
        </P.Container>
    )
}