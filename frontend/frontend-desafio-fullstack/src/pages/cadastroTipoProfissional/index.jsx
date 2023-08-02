import React, { useState } from "react";
import * as CP from "./style";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import * as CTP from "./style";

export const CadastroTipoProfissional = () =>{
    const [dadosCadastro,setDadosCadastro] = useState({
        descricao: "",
        situacao: true
    })
    return(
        <CTP.Container>
            <Header/>
            <CTP.Formulario>
                <h2>Cadastro de profissão</h2>

                <form>
                    <div>
                        <label>Ativo?</label>
                        <input type="checkbox"/>
                    </div>
                    <div>
                        <label>Descricao: </label>
                        <input onChange={(e)=> setDadosCadastro({...dadosCadastro, descrica: e.target.value})}/>
                    </div>
                    <div style={{display: "flex", justifyContent:"center"}}>
                        <button>Salvar</button>
                        <button>Cancelar</button>
                    </div>
                </form>
            </CTP.Formulario>
            <Footer/>
        </CTP.Container>
    )
}