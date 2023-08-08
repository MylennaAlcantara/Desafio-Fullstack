import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('profissional')
export class ProfissionalModel {
    @PrimaryGeneratedColumn('increment')
    @PrimaryColumn()
    id: number;                
    
    @Column({length: 120})
    nome: String;             // *Obrigatório
    
    @Column({
        nullable: true,
    })
    telefone: String;     
    
    @Column({
        nullable: true,
    })
    email: String;          
    
    @Column()
    tipoDeProfissional: Number;   // *Obrigatório
    
    @Column()
    situacao: Boolean;            // *Obrigatório
    
    @Column({
        type: 'datetime',
        nullable: true,
    })
    updatedAt: Date;             // *Obrigatório
    
    @Column({
        type: 'datetime',
        nullable: true,
    })
    createdAt: Date;             // *Obrigatório
}