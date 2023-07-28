import { Timestamp } from "typeorm";

export class TipoProfissionalSchema{
    descricao: string;        // descricao do tipo *Obrigatório
    situacao: boolean;           // situacao do cadastro *Obrigatório
    updatedAt: Timestamp;            // data e hora ultima atualizacao *Obrigatório
    createdAt: Timestamp;             // data e hora de cadastro *Obrigatório
}