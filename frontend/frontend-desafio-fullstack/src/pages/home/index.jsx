import React from "react";
import * as H from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export const Home = () => {
    return (
        <H.Container>
            <Header/>
            <div id="imagem-inicio"/>
            <H.Explain>
                <div className="profissionais">
                    <div className="image-opacity">
                    <img src="/images/trabalhadores.jpg"/>
                    </div>
                    <div className="texto">
                        <h3>Profissionais</h3>
                        <p>É possivel cadastrar e editar profissionais linkando a suas profissões.</p>
                    </div>
                </div>
                <div className="profissoes">
                    <div className="texto">
                        <h3>Profissões</h3>
                        <p>É possivel cadastrar e editar as profissões que serão utilizadas ao cadastrar um novo funcionairio.</p>
                    </div>
                    <div className="image-opacity">
                        <img src="/images/profissoes.jpg"/>
                    </div>
                </div>
            </H.Explain>
            <Footer/>
        </H.Container>
    )
}