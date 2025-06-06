import { z } from 'zod'
import * as dotenv from 'dotenv'

dotenv.config()

const envSchema = z.object({
	DB_HOST: z.string().min(1),
	DB_USER: z.string().min(1),
	DB_PASSWORD: z.string().min(1),
	DB_DATABASE: z.string().min(1),
	JWT_PUBLIC_KEY: z.string().min(1),
	JWT_PRIVATE_KEY: z.string().min(1),
	ZAPI_INSTANCE: z.string().min(1),
	ZAPI_TOKEN: z.string().min(1),
	RESEND_API_KEY: z.string().min(1),
	RESEND_FROM_EMAIL: z.string().min(1),
})

export const env = envSchema.parse(process.env)
