import React, { useEffect, useState } from "react";
import * as CP from "./style";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useNavigate } from "react-router-dom";

export const CadastroProfissional = () => {
    const navigate = useNavigate();
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const setProfissional = null;
    const [tipos, setTipos] = useState([]);
    const [dadosCadastro, setDadosCadastro] = useState({
        nome: "",
        email: "",
        telefone: "",
        tipoDeProfissional: "",
        situacao: true,
        createdAt: today,
        updatedAt: null
    });

    useEffect(()=>{
        async function fetchData(){
            const res = await fetch("http://localhost:8080/tipoProfissional");
            const data = await res.json();
            setTipos(data);
        }
        fetchData();
    },[])

    console.log(tipos)
    async function cadastrar() {
        if(dadosCadastro.tipoDeProfissional === "0"){
            null
        }else{
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
                    navigate("/profissionais")
                }
            })
        }
    }

    return (
        <CP.Container>
            <Header setProfissional={setProfissional}/>
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
                        <select onChange={(e)=> setDadosCadastro({...dadosCadastro, tipoDeProfissional: e.target.value})}>
                            <option value="0">Selecione uma profissão</option>
                            {tipos.map((tipo)=>{
                               return(
                                   <option value={tipo.id} key={tipo.id}>{tipo.id} - {tipo.descricao}</option>
                               ) 
                            })}
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