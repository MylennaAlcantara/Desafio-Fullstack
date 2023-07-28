import { InjectRepository } from "@nestjs/typeorm";
import { ProfissionalService } from "./profissional.service";
import { Repository } from "typeorm";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ProfissionalSchema } from "./profissional.schema";

@Controller("/profissional")
export class ProfissionalController{
    constructor(
        private profissionalRepository: ProfissionalService,
    ){}

    @Get("")
    async buscarTodos(){
        return await this.profissionalRepository.getAll();
    }

    @Get("/:id")
    async buscarProfissional(@Param("id") id: number){
        return await this.profissionalRepository.getOne(id);
    }

    @Post("cadastrar")
    async cadastrarProfissional(@Body() body: ProfissionalSchema){
        return await this.profissionalRepository.create(body);
    }

    
}