import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index() {}

  @Get('cadastarPessoa')
  @Render('cadastro_pessoa')
  cadastro_pessoa(){}
}
