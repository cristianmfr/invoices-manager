import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { env } from './env.config'

@Injectable()
export class EnvService {
	constructor(private configService: ConfigService<typeof env, true>) {}

	get<T extends keyof typeof env>(key: T) {
		return this.configService.get(key, { infer: true })
	}
}
