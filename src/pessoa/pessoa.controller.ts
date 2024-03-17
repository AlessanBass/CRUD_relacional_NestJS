import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Res } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { Response } from 'express';

@Controller('pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Post()
  async create(@Body() createPessoaDto: CreatePessoaDto, @Res() res: Response) {
    await this.pessoaService.create(createPessoaDto);
    res.redirect('pessoa');
  }

  @Get()
  @Render('pessoa')
  async findAll() {
    const retornoPessoas = await this.pessoaService.findAll();
    //console.log(retornoPessoas);
    return {pessoas: retornoPessoas}
  }

  @Get(':id')
  @Render('detalhes')
  async findOne(@Param('id') id: string) {
    const retorno  = await this.pessoaService.findOne(+id);
    const tamanhoEndereco = retorno.endereco.length;
   // console.log(tamanhoEndereco)
    return { detalhes: retorno, quantidadeEnd: tamanhoEndereco}
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePessoaDto: UpdatePessoaDto) {
    return this.pessoaService.update(+id, updatePessoaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pessoaService.remove(+id);
  }
}
