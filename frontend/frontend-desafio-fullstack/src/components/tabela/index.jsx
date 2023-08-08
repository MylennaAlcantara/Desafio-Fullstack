import React, { useEffect, useState } from "react";
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
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Data Cadastro</th>
                        </tr>
                        ):(
                        <tr>
                            <th>Id</th>
                            <th>Profissão</th>
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
                                    <td>{item.tipoDeProfissional}</td>
                                    <td>{item.email}</td>
                                    <td>{item.telefone}</td>
                                    <td>{item.createdAt}</td>
                                </tr>
                            )
                        }) : Array.isArray(tiposProfissionais) && tiposProfissionais.map((tipo)=>{
                            return(
                                <tr key={tipo.id}>
                                    <td>{tipo.id}</td>
                                    <td>{tipo.descricao}</td>
                                    <td>{tipo.createdAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </T.Tabela>
        </T.Container>
    )
}