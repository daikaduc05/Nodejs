import { Injectable } from '@nestjs/common';
import { UserModel } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private idCounting = 0;
  private users: UserModel[] = [
    new UserModel(undefined, 1, 'John', 'john@example.com'),
    new UserModel(undefined, 2, 'Jane', 'jane@example.com'),
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: CreateUserDto) {
    const newUser = new UserModel(user);
    newUser.id = this.idCounting++;
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, user: UpdateUserDto) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index].update(user);
    return this.users[index];
  }

  delete(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
