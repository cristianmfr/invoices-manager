import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/lib/prisma/prisma.service'
import { Prisma } from '@prisma/client'
import { hash } from 'bcryptjs'

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	async createUser(data: Prisma.UserCreateInput) {
		const hashedPassword = await hash(data.password, 10)

		return this.prisma.user.create({
			data: { ...data, password: hashedPassword },
		})
	}

	async getUserByEmail(email: string) {
		return this.prisma.user.findUnique({ where: { email } })
	}

	async getUserById(id: string) {
		return this.prisma.user.findUnique({ where: { id } })
	}

	async updateUser(id: string, data: Prisma.UserUpdateInput) {
		return this.prisma.user.update({ where: { id }, data })
	}

	async deleteUser(id: string) {
		return this.prisma.user.delete({ where: { id } })
	}
}
