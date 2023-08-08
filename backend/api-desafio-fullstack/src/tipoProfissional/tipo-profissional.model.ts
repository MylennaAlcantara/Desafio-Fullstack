import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm"

@Entity("tipo_profissional")
export class TipoProfissionalModel{
    @PrimaryGeneratedColumn('increment')
    @PrimaryColumn()
    id: number;                  // ID 
    
    @Column()
    descricao: string;        // descricao do tipo *Obrigatório
    
    @Column()
    situacao: boolean;           // situacao do cadastro *Obrigatório
    
    @Column({
        type: 'datetime',
        nullable: true,
    })
    updatedAt: Date;            // data e hora ultima atualizacao *Obrigatório
    
    @Column({
        type: 'datetime',
        nullable: true,
    })
    createdAt: Date;             // data e hora de cadastro *Obrigatório
}