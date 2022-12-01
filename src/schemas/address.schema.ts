import { IsString, MaxLength, Min } from 'class-validator';

export class AddressSchema {
  @IsString()
  @MaxLength(50)
  street: string;

  @IsString()
  number: string;

  @IsString()
  @MaxLength(50)
  city: string;
}
