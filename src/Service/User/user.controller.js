import { Controller, Get } from '@nestjs/common'

@Controller('users')
export class UserController {
  constructor(userService) {
    this.userService = userService
  }

  @Get()
  async findAll () {
    return this.userService.findAll()
  }

  // 其他路由...
}
