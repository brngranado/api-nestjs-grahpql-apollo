import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userMongooseRepository: Model<User>,
  ) {}
  async create(createUserInput: CreateUserInput) {
    const create = new this.userMongooseRepository(createUserInput);
    await create.save();

    return create;
  }

  findAll() {
    return this.userMongooseRepository.find().exec();
  }

  /** since this point you can use another config in the service */
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
