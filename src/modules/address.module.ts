import { AddressModel } from './../models/address.model';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AddressController } from './../controllers/address.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([AddressModel])],
  controllers: [AddressController],
})
export class AddressModule {}
