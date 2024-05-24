import { Injectable } from '@nestjs/common';

import { RegisterUserDto } from './register-user.dto';
import { User } from './users.schema';

@Injectable()
export class UserService {
  async register(registerUserDto: RegisterUserDto): Promise<User> {
    return new User();
  }
}
