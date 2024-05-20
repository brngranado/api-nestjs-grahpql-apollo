import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserInput {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;
}
