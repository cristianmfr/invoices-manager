import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
} from 'typeorm'
import { User } from './user.entity'
import { Company } from './company.entity'
import { CompanyAccount } from './company-account.entity'
import { Client } from './client.entity'
import { InvoiceSubcategory } from './invoice-subcategory.entity'

@Entity({ name: 'dad_cliente_contrato', schema: 'saraserra' })
export class ClientContract {
	@PrimaryGeneratedColumn({ name: 'cctId' })
	id: number

	@Column({ name: 'cctDescricao', nullable: true, length: 255 })
	description: string

	@Column({
		name: 'cctVencimento',
		nullable: true,
		type: 'decimal',
		precision: 20,
	})
	dueDate: number

	@Column({
		name: 'cctValor',
		nullable: true,
		type: 'decimal',
		precision: 20,
		scale: 2,
	})
	value: number

	@Column({ name: 'cctPrazo', nullable: true, type: 'decimal', precision: 20 })
	term: number

	@Column({ name: 'cctForma', nullable: true, length: 18 })
	form: string

	@Column({ name: 'cctNF', nullable: true, length: 4 })
	invoice: string

	@Column({ name: 'cctObservacao', nullable: true, type: 'text' })
	observation: string

	@Column({ name: 'cctTipo', nullable: true, length: 16 })
	type: string

	@ManyToOne(() => Client, { onDelete: 'CASCADE', nullable: false })
	@JoinColumn({ name: 'cctCliente' })
	client: Client

	@ManyToOne(() => Company, { onDelete: 'RESTRICT', nullable: false })
	@JoinColumn({ name: 'cctEmpresa' })
	company: Company

	@ManyToOne(() => CompanyAccount, { onDelete: 'RESTRICT', nullable: true })
	@JoinColumn({ name: 'cctEmpresaConta' })
	companyAccount: CompanyAccount

	@ManyToOne(() => InvoiceSubcategory, {
		onDelete: 'RESTRICT',
		nullable: false,
	})
	@JoinColumn({ name: 'cctSubCategoria' })
	subcategory: InvoiceSubcategory

	@Column({
		name: 'cctSituacao',
		nullable: true,
		length: 10,
		default: 'INATIVO',
	})
	status: string

	@Column({ name: 'cctAlteracaoData', nullable: true, type: 'datetime' })
	modificationDate: Date

	@ManyToOne(() => User, { onDelete: 'SET NULL', nullable: true })
	@JoinColumn({ name: 'cctAlteracaoUsuario' })
	modificationUser: User
}
