import React, { useEffect, useState } from "react";
import * as CP from "./style";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import * as CTP from "./style";
import { useNavigate } from "react-router-dom";

export const CadastroTipoProfissional = () => {
    const navigate = useNavigate();
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const [dadosCadastro, setDadosCadastro] = useState({
        id: 0,
        descricao: "",
        situacao: true,
        createdAt: today,
        updatedAt: null
    });
    async function cadastrar(){
        await fetch("http://localhost:8080/tipoProfissional/cadastrar",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(dadosCadastro)
        })
        .then((res)=>{
            if(res.status === 200 || res.status === 201){
                alert("Salvou!");
                navigate("/tiposProfissionais")
            }else{
                alert("Deus erro!")
            }
        })
    }
    return (
        <CTP.Container>
            <Header />
            <CTP.Formulario>
                <h2>Cadastro de profissão</h2>

                <form>
                    <div>
                        <label>Ativo?</label>
                        <input type="checkbox" checked/>
                    </div>
                    <div>
                        <label>Descricao: </label>
                        <input onChange={(e) => setDadosCadastro({ ...dadosCadastro, descricao: e.target.value })} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button onClick={(e)=> {e.preventDefault(); cadastrar()}} type="submit">Salvar</button>
                        <button>Cancelar</button>
                    </div>
                </form>
            </CTP.Formulario>
            <Footer />
        </CTP.Container>
    )
}