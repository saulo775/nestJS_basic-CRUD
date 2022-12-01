import { AddressSchema } from './../schemas/address.schema';
import { AddressModel } from './../models/address.model';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('/address')
export class AddressController {
  constructor(
    @InjectRepository(AddressModel) private model: Repository<AddressModel>,
  ) {}

  @Post()
  public async create(@Body() body: AddressSchema): Promise<AddressModel> {
    return await this.model.save(body);
  }

  @Get(':id')
  public async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<AddressModel> {
    const address = await this.model.findOne({ where: { id } });
    if (!address) {
      throw new NotFoundException(`Não achei um endereço com o id ${id}`);
    }
    return address;
  }

  @Get()
  public async findAll(): Promise<AddressModel[]> {
    return await this.model.find();
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: AddressSchema,
  ): Promise<AddressModel> {
    const address = await this.model.findOne({ where: { id } });

    if (!address) {
      throw new NotFoundException(`Não achei um endereço com o id ${id}`);
    }

    await this.model.update({ id }, body);
    return await this.model.findOne({ where: { id } });
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const address = await this.model.findOne({ where: { id } });

    if (!address) {
      throw new NotFoundException(`Não achei um endereço com o id ${id}`);
    }

    await this.model.delete(id);
    return `O endereço com o id ${id} foi deletado com sucesso.`;
  }
}
