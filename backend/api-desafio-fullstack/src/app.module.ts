import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfissionalModel } from './profissional/profissional.model';
import { ormConfig } from 'ormConfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), ProfissionalModel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
