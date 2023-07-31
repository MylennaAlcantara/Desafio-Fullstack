import React from "react"; 
import { useNavigate } from "react-router-dom"
import * as H from "./style";

export const Header = () => {
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
                <div className="menu">
                    <button onClick={()=> navigate("")}>Home</button>
                    <button onClick={()=> navigate("/profissionais")}>Profissionais</button>
                    <button onClick={()=> navigate("/tipoProfissionais")}>Tipos de Profissionais</button>
                </div>
            </H.NavBar>
        </H.Container>
    )
}