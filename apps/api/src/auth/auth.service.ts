import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from 'src/app/modules/user/user.service'
import { compare } from 'bcryptjs'

@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly userService: UserService,
	) {}

	async signIn(email: string, password: string) {
		const user = await this.userService.getUserByEmail(email)

		if (!user) {
			throw new UnauthorizedException('Invalid credentials')
		}

		const isPasswordValid = await compare(password, user.password)

		if (!isPasswordValid) {
			throw new UnauthorizedException('Invalid credentials')
		}

		const payload = { sub: user.id }

		return {
			accessToken: await this.jwtService.signAsync(payload),
		}
	}
}
