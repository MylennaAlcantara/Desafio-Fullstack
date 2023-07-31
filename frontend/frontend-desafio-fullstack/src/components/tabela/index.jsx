import React from "react";
import * as T from "./style";

export const Tabela = () => {
    return(
        <T.Container>
            <T.Tabela>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nome</th>
                            <th>Profissão</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>bla</td>
                            <td>bla</td>
                            <td>bla</td>
                        </tr>
                    </tbody>
                </table>
            </T.Tabela>
        </T.Container>
    )
}