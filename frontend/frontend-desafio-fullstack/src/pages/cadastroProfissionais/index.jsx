import React, { useState } from "react";
import * as CP from "./style";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useNavigate } from "react-router-dom";

export const CadastroProfissional = () => {
    const navigate = useNavigate();
    const [dadosCadastro, setDadosCadastro] = useState({
        nome: "",
        email: "",
        telefone: "",
        tipoProfissional: "",
        situacao: true,
        createAt: ""
    });

    async function cadastrar() {
        fetch("http://localhost:8080/profissional/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dadosCadastro)
        })
        .then((res)=>{
            if(res.status === 201 || res.status === 200){
                alert("Salvou!");
                navigate("/profissional")
            }
        })
    }

    return (
        <CP.Container>
            <Header />
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
                        <input value={dadosCadastro.nome} onChange={(e) => setDadosCadastro({ ...dadosCadastro, nome: e.target.value })} />
                        <input value={dadosCadastro.email} onChange={(e) => setDadosCadastro({ ...dadosCadastro, email: e.target.value })} />
                        <input value={dadosCadastro.telefone} onChange={(e) => setDadosCadastro({ ...dadosCadastro, telefone: e.target.value })} />
                        <select>
                            <option>Selecione uma profissão</option>
                        </select>
                    </div>
                </form>
                <div style={{ display: "flex", flexDirection: "row", marginTop: "5px", height: "auto" }}>
                    <button onClick={cadastrar}>Salvar</button>
                    <button>Desativar</button>
                    <button>Cancelar</button>
                </div>
            </CP.Formulario>
            <Footer />
        </CP.Container>
    )
}