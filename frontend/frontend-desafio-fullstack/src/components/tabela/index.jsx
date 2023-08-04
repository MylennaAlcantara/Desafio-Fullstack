import React from "react";
import * as T from "./style";

export const Tabela = ({profissional, profissionais, tiposProfissionais}) => {
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
                        {profissional ? profissionais.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.tipoProfissional}</td>
                                    <td>{item.createAt}</td>
                                </tr>
                            )
                        }) : tiposProfissionais.map((tipo)=>{
                            return(
                                <tr key={tipo.id}>
                                    <td>{tipo.id}</td>
                                    <td>{tipo.descricao}</td>
                                    <td>{tipo.createAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </T.Tabela>
        </T.Container>
    )
}