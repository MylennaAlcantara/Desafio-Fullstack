import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TipoProfissionalService } from "./tipo-profissional.service";
import { TipoProfissionalSchema } from "./tipo-profissional.schema";
import { TipoProfissionalModel } from "./tipo-profissional.model";

@Controller("/tipoProfissional")
export class TipoProfissionalController {
    constructor(
        private tipoProfissionalRepository: TipoProfissionalService,
    ) { };

    @Get("")
    async buscarTipos() {
        return await this.tipoProfissionalRepository.getAll();
    }

    @Get("/:id")
    async buscarTipoId(@Param("id") id: number) {
        return await this.tipoProfissionalRepository.getOne(id);
    }

    @Post("/cadastrar")
    async cadastrarTipo(@Body() body: TipoProfissionalSchema) {
        return await this.tipoProfissionalRepository.create(body);
    }

    @Put("/atualizar/:id")
    async atualizarTipo(@Param("id") id: number, body: TipoProfissionalModel) {
        return await this.tipoProfissionalRepository.update(id, body);
    }
}