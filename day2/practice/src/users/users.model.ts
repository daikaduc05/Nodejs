import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export class UserModel {
  id: number;
  name: string;
  email: string;
  constructor(user?: CreateUserDto, id?: number, name?: string, email?: string) {
    this.id = id ?? 0;
    this.name = user?.name ?? name ?? '';
    this.email = user?.email ?? email ?? '';
  }
  update(user: UpdateUserDto) {
    if (user.name) {
      this.name = user.name;
    }
    if (user.email) {
      this.email = user.email;
    }
  }
}
