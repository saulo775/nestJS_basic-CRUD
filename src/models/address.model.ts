import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class AddressModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  street: string;

  @Column()
  number: string;

  @Column({ length: 50 })
  city: string;
}
