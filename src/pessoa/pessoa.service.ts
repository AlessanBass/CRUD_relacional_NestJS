import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PessoaService {
  constructor(private readonly prisma: PrismaService){}

  async create(createPessoaDto: CreatePessoaDto) {
    return this.prisma.pessoa.create({
      data:{
        nome: createPessoaDto.nome,
        senha: createPessoaDto.senha
      }
    });
  }

  async findAll() {
    return this.prisma.pessoa.findMany();
  }

  async findOne(id: number) {
    return this.prisma.pessoa.findUnique({
      where:{id_pessoa:id},
      include:{endereco: true}
    });
  }

  update(id: number, updatePessoaDto: UpdatePessoaDto) {
    return this.prisma.pessoa.update({
      data:{
        nome : updatePessoaDto.nome,
        senha: updatePessoaDto.senha
      },
      where:{id_pessoa:id}
    });
  }
  
  async remove(id: number) {

    await this.prisma.endereco.deleteMany({
      where:{pessoa_id_pessoa:id}
    });

    return this.prisma.pessoa.delete({
      where:{id_pessoa:id},
      include:{endereco:true}
    });
  }
}
