import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { SignInDto } from './dto/sign-in.dto'
import { Public } from 'src/common/decorators/is-public.decorator'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('sign-in')
	@Public()
	@ApiOperation({ summary: 'Sign in' })
	@ApiResponse({ status: 200, description: 'The signed in user' })
	async signIn(@Body() body: SignInDto) {
		return this.authService.signIn(body.email, body.password)
	}
}
