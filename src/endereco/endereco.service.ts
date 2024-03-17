import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EnderecoService {
  constructor(private readonly prisma: PrismaService){}

  async create(createEnderecoDto: CreateEnderecoDto, id:number) {
    return this.prisma.endereco.create({
        data:{
          rua: createEnderecoDto.rua,
          bairro: createEnderecoDto.bairro,
          pessoa:{connect:{id_pessoa:id}}
        }
      }) ;
  }

  async findAll() {
    return this.prisma.endereco.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} endereco`;
  }

  update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    return `This action updates a #${id} endereco`;
  }

  async remove(idPessoa: number, idEnd: number) {
    return this.prisma.endereco.delete({
      where:{
        id_endereco_pessoa_id_pessoa:{
          id_endereco : idEnd,
          pessoa_id_pessoa:idPessoa
        }
      }
    });
  }
}
