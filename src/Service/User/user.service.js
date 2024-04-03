import { Injectable } from '@nestjs/common'
import { User } from '../../Entities/user.entity'

@Injectable()
export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async findAll () {
    return this.userRepository.find()
  }

  // 其他方法...
}