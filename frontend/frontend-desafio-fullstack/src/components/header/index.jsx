import React from "react"; 
import { useNavigate } from "react-router-dom"
import * as H from "./style";

export const Header = ({ setProfissional }) => {
    const navigate = useNavigate();
    return(
        <H.Container>
            <H.Contato>
                <div className="contatos">
                    <div>
                        <img src="/images/icones/email_icon.png"/>
                        <label>Email: </label>
                        <label>mylenna.a.a.corinthiana@gmail.com</label>
                    </div>
                    <div>
                        <img src="/images/icones/whatsapp_icon.png"/>
                        <label>Celular: </label>
                        <label>(81) 9 9359-0099</label>
                    </div>
                </div>
                <div className="redes-sociais">
                    <img src="/images/icones/instagram_icon.png"/>
                    <img src="/images/icones/github_icon.png"/>
                    <img src="/images/icones/linkedin_icon.png"/>
                </div>
            </H.Contato>
            <H.NavBar>
                <h1>Gestor</h1>
                <div id="menu">
                <div className="hamburguer">X</div>
                <div className="menu">
                    <button onClick={()=> navigate("/")}>Home</button>
                    <div className="button">
                        <button>Profissionais</button>
                        <div className="menu-item">
                            <button onClick={()=> {navigate("/profissionais"); setProfissional(true)}}>Lista de Profissionais</button>
                            <button onClick={()=> navigate("/profissionais/cadastrar")}>Cadastrar Profissional</button>
                        </div>
                    </div>
                    <div className="button">
                        <button>Tipos de Profissões</button>
                        <div className="menu-item">
                            <button onClick={()=> {navigate("/tiposProfissionais"); setProfissional(false)}}>Lista de Tipos de Profissões</button>
                            <button onClick={()=> navigate("/tiposProfissionais/cadastrar")}>Cadastrar Tipo de Profissão</button>
                        </div>
                    </div>
                </div>
                </div>
            </H.NavBar>
        </H.Container>
    )
}