import { Module } from "@nestjs/common";
import { TipoProfissionalModel } from "./tipo-profissional.model";
import { TipoProfissionalSchema } from "./tipo-profissional.schema";
import { TipoProfissionalController } from "./tipo-profissional.controller";
import { TipoProfissionalService } from "./tipo-profissional.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([TipoProfissionalModel, TipoProfissionalSchema])],
    controllers: [TipoProfissionalController],
    providers: [TipoProfissionalService]
})
export class TipoProfissionalModule{}