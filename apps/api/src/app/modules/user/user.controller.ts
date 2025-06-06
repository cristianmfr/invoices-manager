import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

import { UserService } from './user.service'
import { Prisma } from '@prisma/client'
import { Public } from 'src/common/decorators/is-public.decorator'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Public()
	@Post('register')
	async register(@Body() body: Prisma.UserCreateInput) {
		return this.userService.createUser(body)
	}

	@Get(':email')
	async getUser(@Param('email') email: string) {
		return this.userService.getUserByEmail(email)
	}

	@Get(':id')
	async getUserById(@Param('id') id: string) {
		return this.userService.getUserById(id)
	}

	@Put(':id')
	async updateUser(
		@Param('id') id: string,
		@Body() body: Prisma.UserUpdateInput,
	) {
		return this.userService.updateUser(id, body)
	}

	@Delete(':id')
	async deleteUser(@Param('id') id: string) {
		return this.userService.deleteUser(id)
	}
}
