import { Column, Entity, PrimaryColumn, Timestamp } from "typeorm"

@Entity("tipo_profissional")
export class TipoProfissionalModel{
    @PrimaryColumn()
    id: number;                  // ID 
    @Column()
    descricao: string;        // descricao do tipo *Obrigatório
    @Column()
    situacao: boolean;           // situacao do cadastro *Obrigatório
    @Column()
    updatedAt: Date;            // data e hora ultima atualizacao *Obrigatório
    @Column()
    createdAt: Date;             // data e hora de cadastro *Obrigatório
}