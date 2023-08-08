import { IsString, MaxLength, IsEmail } from "class-validator";

export class ProfissionalSchema{    
    @IsString()
    nome: String;             // *Obrigatório
    
    telefone: String;     
    
    @IsString()
    @IsEmail()
    email: String;          
    
    tipoDeProfissional: Number;   // *Obrigatório
    
    situacao: Boolean;            // *Obrigatório
    
    updatedAt: Date;             // *Obrigatório
    
    createdAt: Date;             // *Obrigatório

}