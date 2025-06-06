import { Module } from '@nestjs/common'
import { LogsController } from './logs.controller'
import { LogsService } from './logs.service'
import { PrismaModule } from 'src/lib/prisma/prisma.module'

@Module({
	imports: [PrismaModule],
	controllers: [LogsController],
	providers: [LogsService],
	exports: [LogsService],
})
export class LogsModule {}
