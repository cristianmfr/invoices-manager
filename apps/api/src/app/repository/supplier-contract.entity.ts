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
import { Supplier } from './supplier.entity'
import { InvoiceSubcategory } from './invoice-subcategory.entity'

@Entity({ name: 'dad_fornecedor_contrato', schema: 'saraserra' })
export class SupplierContract {
	@PrimaryGeneratedColumn({ name: 'fntId' })
	id: number

	@Column({ name: 'fntDescricao', nullable: true, length: 255 })
	description: string

	@Column({
		name: 'fntVencimento',
		nullable: true,
		type: 'decimal',
		precision: 20,
	})
	dueDate: number

	@Column({
		name: 'fntValor',
		nullable: true,
		type: 'decimal',
		precision: 20,
		scale: 2,
	})
	value: number

	@Column({ name: 'fntPrazo', nullable: true, type: 'decimal', precision: 20 })
	term: number

	@Column({ name: 'fntForma', nullable: true, length: 18 })
	form: string

	@Column({ name: 'fntNF', nullable: true, length: 4 })
	invoice: string

	@Column({ name: 'fntObservacao', nullable: true, type: 'text' })
	observation: string

	@Column({ name: 'fntTipo', nullable: true, length: 16 })
	type: string

	@ManyToOne(() => InvoiceSubcategory, {
		onDelete: 'RESTRICT',
		nullable: false,
	})
	@JoinColumn({ name: 'fntSubCategoria' })
	subcategory: InvoiceSubcategory

	@ManyToOne(() => Supplier, { onDelete: 'CASCADE', nullable: false })
	@JoinColumn({ name: 'fntFornecedor' })
	supplier: Supplier

	@ManyToOne(() => CompanyAccount, { onDelete: 'RESTRICT', nullable: true })
	@JoinColumn({ name: 'fntEmpresaConta' })
	companyAccount: CompanyAccount

	@ManyToOne(() => Company, { onDelete: 'RESTRICT', nullable: false })
	@JoinColumn({ name: 'fntEmpresa' })
	company: Company

	@Column({
		name: 'fntSituacao',
		nullable: true,
		length: 10,
		default: 'INATIVO',
	})
	status: string

	@Column({ name: 'fntAlteracaoData', nullable: true, type: 'datetime' })
	modificationDate: Date

	@ManyToOne(() => User, { onDelete: 'SET NULL', nullable: true })
	@JoinColumn({ name: 'fntAlteracaoUsuario' })
	modificationUser: User
}
