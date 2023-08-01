import React from "react";
import * as CP from "./style";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export const CadastroProfissional = () =>{
    return(
        <CP.Container>
            <Header/>
            <CP.Formulario>
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
                    <button>Salvar</button>
                </CP.Formulario>
            <Footer/>
        </CP.Container>
    )
}