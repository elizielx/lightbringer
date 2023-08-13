import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
  async findUsers(): Promise<User> {
    const users: User = {
      id: '1',
      name: 'Hadrianus Eosphorus Luminarya',
    };

    return users;
  }
}
