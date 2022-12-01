import { AddressModule } from './modules/address.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AddressModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db.sql',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
