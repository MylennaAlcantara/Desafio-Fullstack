import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { TipoProfissionalModel } from "./tipo-profissional.model";
import { InjectRepository } from "@nestjs/typeorm";
import { TipoProfissionalSchema } from "./tipo-profissional.schema";

@Injectable()
export class TipoProfissionalService {
    constructor(
        @InjectRepository(TipoProfissionalModel)
        private tipoProfissionalRepository: Repository<TipoProfissionalModel>,
    ) { };

    async getAll(){
        return this.tipoProfissionalRepository.find();
    }

    async getOne(id: number){
        return this.tipoProfissionalRepository.findOne({where: {id}});
    }

    async create(body: TipoProfissionalSchema){
        const dados = this.tipoProfissionalRepository.create(body);
        await this.tipoProfissionalRepository.save(dados);
        return dados;
    }

    async update(id: number, dados: Partial<TipoProfissionalModel>){
        return await this.tipoProfissionalRepository.update(id, dados);
    }

}