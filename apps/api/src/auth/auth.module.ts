import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { APP_GUARD } from '@nestjs/core'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { EnvService } from 'src/lib/env/env.service'
import { EnvModule } from 'src/lib/env/env.module'
import { JwtStrategy } from './jwt-strategy'
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard'
import { UserModule } from 'src/app/modules/user/user.module'

@Module({
	imports: [
		UserModule,
		PassportModule,
		JwtModule.registerAsync({
			imports: [EnvModule],
			inject: [EnvService],
			global: true,
			useFactory(env: EnvService) {
				const privateKey = env.get('JWT_PRIVATE_KEY')
				const publicKey = env.get('JWT_PUBLIC_KEY')

				return {
					signOptions: { algorithm: 'RS256' },
					privateKey: Buffer.from(privateKey, 'base64'),
					publicKey: Buffer.from(publicKey, 'base64'),
				}
			},
		}),
	],
	controllers: [AuthController],
	providers: [
		EnvService,
		AuthService,
		JwtStrategy,
		{
			provide: APP_GUARD,
			useClass: JwtAuthGuard,
		},
	],
})
export class AuthModule {}
