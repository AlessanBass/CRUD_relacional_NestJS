import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  @Post(':id')
  create(@Body() createEnderecoDto: CreateEnderecoDto, @Param('id') id: string) {
    return this.enderecoService.create(createEnderecoDto, +id);
  }

  @Get()
  findAll() {
    return this.enderecoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enderecoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnderecoDto: UpdateEnderecoDto) {
    return this.enderecoService.update(+id, updateEnderecoDto);
  }

  @Delete(':idPessoa/:idEndereco')
  remove(@Param('idPessoa') idPessoa: string, @Param('idEndereco') idEnd:string) {
    return this.enderecoService.remove(+idPessoa, +idEnd);
  }
}
