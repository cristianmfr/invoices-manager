import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Invoice } from '../../repository/invoice.entity'
import { InvoicesController } from './invoice.controller'
import { InvoicesService } from './invoice.service'
import { WhatsAppModule } from '../../../lib/whatsapp/whatsapp.module'
import { PrismaModule } from '../../../lib/prisma/prisma.module'
import { ResendModule } from '../../../lib/resend/resend.module'

@Module({
	imports: [
		TypeOrmModule.forFeature([Invoice]),
		WhatsAppModule,
		PrismaModule,
		ResendModule,
	],
	controllers: [InvoicesController],
	providers: [InvoicesService],
	exports: [InvoicesService],
})
export class InvoicesModule {}
