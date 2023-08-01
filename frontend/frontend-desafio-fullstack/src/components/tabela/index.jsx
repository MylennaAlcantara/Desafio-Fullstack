import React from "react";
import * as T from "./style";

export const Tabela = ({profissional}) => {
    return(
        <T.Container>
            <T.Tabela>
                <table>
                    <thead>
                        {profissional ? (
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Profissão</th>
                            <th>Data Cadastro</th>
                        </tr>
                        ):(
                        <tr>
                            <th>Id</th>
                            <th>Profissao</th>
                            <th>Data Cadastro</th>
                        </tr>
                        )}
                    </thead>
                    <tbody>
                        {/*body && body.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item}</td>
                                </tr>
                            )
                        })*/}
                    </tbody>
                </table>
            </T.Tabela>
        </T.Container>
    )
}