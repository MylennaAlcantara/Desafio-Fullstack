import React, { useState } from "react";
import * as CP from "./style";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export const CadastroProfissional = () =>{
    const [dadosCadastro, setDadosCadastro]= useState({
        nome: "",
        email: "",
        telefone: "",
        tipoProfissional: "",
        situacao: true
    })
    return(
        <CP.Container>
            <Header/>
            <CP.Formulario>
                <h2>Cadastro de profissional</h2>
                <form>
                    <div>
                        <label>Nome: </label>
                        <label>Email: </label>
                        <label>Telefone: </label>
                        <label>Profissão: </label>
                    </div>
                    <div>
                        <input/>
                        <input/>
                        <input/>
                        <select>
                            <option>Selecione uma profissão</option>
                        </select>
                    </div>
                </form>
                    <div style={{display: "flex", flexDirection:"row", marginTop:"5px", height:"auto"}}>
                        <button>Salvar</button>
                        <button>Desativar</button>
                        <button>Cancelar</button>
                    </div>
                </CP.Formulario>
            <Footer/>
        </CP.Container>
    )
}