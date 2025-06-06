import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { env } from './lib/env/env.config'
import { Invoice } from './app/repository/invoice.entity'
import { Associate } from './app/repository/associate.entity'
import { Lot } from './app/repository/lot.entity'
import { Block } from './app/repository/block.entity'
import { InvestmentForecast } from './app/repository/investment-forecast.entity'
import { InvoiceCategory } from './app/repository/invoice-category.entity'
import { InvoiceSubcategory } from './app/repository/invoice-subcategory.entity'
import { SupplierContract } from './app/repository/supplier-contract.entity'
import { Supplier } from './app/repository/supplier.entity'
import { ClientContract } from './app/repository/client-contract.entity'
import { CompanyAccount } from './app/repository/company-account.entity'
import { Company } from './app/repository/company.entity'
import { Client } from './app/repository/client.entity'
import { City } from './app/repository/city.entity'
import { State } from './app/repository/state.entity'
import { User } from './app/repository/user.entity'
import { Remittance } from './app/repository/remittance.entity'
import { LogsModule } from './app/modules/logs/logs.module'
import { InvoicesModule } from './app/modules/invoices/invoice.module'
import { UserModule } from './app/modules/user/user.module'
import { AuthModule } from './auth/auth.module'

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: env.DB_HOST,
			port: 3306,
			username: env.DB_USER,
			password: env.DB_PASSWORD,
			database: env.DB_DATABASE,
			entities: [
				Invoice,
				Associate,
				Lot,
				Block,
				InvestmentForecast,
				InvoiceCategory,
				InvoiceSubcategory,
				SupplierContract,
				Supplier,
				ClientContract,
				CompanyAccount,
				Company,
				Client,
				City,
				State,
				Client,
				User,
				Block,
				SupplierContract,
				Remittance,
			],
			synchronize: false,
		}),
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: '.env',
		}),
		AuthModule,
		UserModule,
		InvoicesModule,
		LogsModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
