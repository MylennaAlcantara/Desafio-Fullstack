import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProfissionalModel } from "./profissional.model";
import { Repository } from "typeorm";
import { ProfissionalSchema } from "./profissional.schema";

@Injectable()
export class ProfissionalService {
    constructor(
        @InjectRepository(ProfissionalModel)
        private profissionalRepository: Repository<ProfissionalModel>,
    ) { }

    async getAll() {
        return await this.profissionalRepository.find();
    }

    async getOne(id: number): Promise<ProfissionalModel> {
        return await this.profissionalRepository.findOne(
            {
                where: { id: id }
            });
    }

    async create(@Body() body: ProfissionalSchema) {
        const dados = this.profissionalRepository.create(body);
        return await this.profissionalRepository.save(dados);
    }

    async update(id: number, dados: Partial<ProfissionalModel>) {
        return await this.profissionalRepository.update(id, dados);
    }

}