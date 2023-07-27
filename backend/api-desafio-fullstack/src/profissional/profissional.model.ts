import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('profissional')
export class ProfissionalModel {
    @PrimaryGeneratedColumn()
    id: number;                
    
    @Column({length: 120})
    nome: String;             // *Obrigatório
    
    @Column()
    telefone: Number;     
    
    @Column()
    email: String;          
    
    @Column()
    tipoDeProfissional: Number;   // *Obrigatório
    
    @Column()
    situacao: Boolean;            // *Obrigatório
    
    @Column()
    updatedAt: Date;             // *Obrigatório
    
    @Column()
    createdAt: Date;             // *Obrigatório
}