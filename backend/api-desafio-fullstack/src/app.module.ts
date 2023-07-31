import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from 'ormConfig';
import { ProfissionalModule } from './profissional/profissional.module';
import { TipoProfissionalModule } from './tipoProfissional/tipo-profissional.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), ProfissionalModule, TipoProfissionalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
