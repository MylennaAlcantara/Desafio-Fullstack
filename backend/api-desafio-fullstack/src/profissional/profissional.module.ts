import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfissionalModel } from "./profissional.model";
import { ProfissionalSchema } from "./profissional.schema";
import { ProfissionalService } from "./profissional.service";
import { ProfissionalController } from "./profissional.controller";

@Module({
    imports: [TypeOrmModule.forFeature([ProfissionalModel, ProfissionalSchema])],
    controllers: [ProfissionalController],
    providers: [ProfissionalService]
})
export class ProfissionalModule{}