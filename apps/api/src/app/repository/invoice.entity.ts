import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
} from 'typeorm'
import { User } from './user.entity'
import { Associate } from './associate.entity'
import { Client } from './client.entity'
import { ClientContract } from './client-contract.entity'
import { Company } from './company.entity'
import { CompanyAccount } from './company-account.entity'
import { Supplier } from './supplier.entity'
import { SupplierContract } from './supplier-contract.entity'
import { Lot } from './lot.entity'
import { InvestmentForecast } from './investment-forecast.entity'
import { Block } from './block.entity'
import { Remittance } from './remittance.entity'
import { InvoiceSubcategory } from './invoice-subcategory.entity'

@Entity({ name: 'dad_fatura', schema: 'saraserra' })
export class Invoice {
	@PrimaryGeneratedColumn({ name: 'ftrId' })
	id: number

	@Column({ name: 'ftrDescricao', nullable: true, length: 255 })
	description: string

	@Column({ name: 'ftrDataVencimento', nullable: true, type: 'date' })
	dueDate: Date

	@Column({ name: 'ftrDataPagamento', nullable: true, type: 'date' })
	paymentDate: Date

	@Column({ name: 'ftrDataCompetencia', nullable: true, type: 'date' })
	competenceDate: Date

	@Column({
		name: 'ftrValorVencimento',
		nullable: true,
		type: 'decimal',
		precision: 20,
		scale: 2,
	})
	dueValue: number

	@Column({
		name: 'ftrValorPagamento',
		nullable: true,
		type: 'decimal',
		precision: 20,
		scale: 2,
	})
	paymentValue: number

	@Column({
		name: 'ftrValorDesconto',
		nullable: true,
		type: 'decimal',
		precision: 20,
		scale: 2,
	})
	discountValue: number

	@Column({
		name: 'ftrValorJuro',
		nullable: true,
		type: 'decimal',
		precision: 20,
		scale: 2,
	})
	interestValue: number

	@Column({
		name: 'ftrValorCondominio',
		nullable: true,
		type: 'decimal',
		precision: 20,
		scale: 2,
	})
	condominiumValue: number

	@Column({
		name: 'ftrValorFundoReserva',
		nullable: true,
		type: 'decimal',
		precision: 20,
		scale: 2,
	})
	reserveFundValue: number

	@Column({
		name: 'ftrValorManutencaoAgua',
		nullable: true,
		type: 'decimal',
		precision: 20,
		scale: 2,
	})
	waterMaintenanceValue: number

	@Column({ name: 'ftrDataVencimentoInicial', nullable: true, type: 'date' })
	initialDueDate: Date

	@Column({ name: 'ftrNaoExibirPrestacao', nullable: true, length: 4 })
	hideInstallment: string

	@Column({ name: 'ftrForma', nullable: true, length: 18 })
	form: string

	@Column({ name: 'ftrFormaBandeira', nullable: true, length: 18 })
	formFlag: string

	@Column({ name: 'ftrFormaBanco', nullable: true, length: 255 })
	formBank: string

	@Column({ name: 'ftrFormaNumero', nullable: true, length: 255 })
	formNumber: string

	@Column({ name: 'ftrObservacao', nullable: true, type: 'text' })
	observation: string

	@ManyToOne(() => Associate, (associate) => associate.invoices, {
		onDelete: 'RESTRICT',
		nullable: false,
	})
	@JoinColumn({ name: 'ftrAssociado' })
	associate: Associate

	@ManyToOne(() => Lot, { onDelete: 'RESTRICT', nullable: true })
	@JoinColumn({ name: 'ftrLote' })
	lot: Lot

	@ManyToOne(() => Block, { onDelete: 'RESTRICT', nullable: true })
	@JoinColumn({ name: 'ftrQuadra' })
	block: Block

	@ManyToOne(() => InvestmentForecast, { onDelete: 'RESTRICT', nullable: true })
	@JoinColumn({ name: 'ftrInvestimento' })
	investment: InvestmentForecast

	@ManyToOne(() => InvoiceSubcategory, {
		onDelete: 'RESTRICT',
		nullable: false,
	})
	@JoinColumn({ name: 'ftrSubCategoria' })
	subcategory: InvoiceSubcategory

	@ManyToOne(() => SupplierContract, { onDelete: 'RESTRICT', nullable: true })
	@JoinColumn({ name: 'ftrFornecedorContrato' })
	supplierContract: SupplierContract

	@ManyToOne(() => Supplier, { onDelete: 'RESTRICT', nullable: true })
	@JoinColumn({ name: 'ftrFornecedor' })
	supplier: Supplier

	@ManyToOne(() => ClientContract, { onDelete: 'RESTRICT', nullable: true })
	@JoinColumn({ name: 'ftrClienteContrato' })
	clientContract: ClientContract

	@ManyToOne(() => Client, { onDelete: 'RESTRICT', nullable: true })
	@JoinColumn({ name: 'ftrCliente' })
	client: Client

	@ManyToOne(() => CompanyAccount, { onDelete: 'RESTRICT', nullable: true })
	@JoinColumn({ name: 'ftrEmpresaConta' })
	companyAccount: CompanyAccount

	@ManyToOne(() => Company, { onDelete: 'RESTRICT', nullable: false })
	@JoinColumn({ name: 'ftrEmpresa' })
	company: Company

	@Column({
		name: 'ftrSituacao',
		nullable: true,
		length: 10,
		default: 'A VENCER',
	})
	status: string

	@Column({ name: 'ftrCadastro', nullable: true, length: 10 })
	registration: string

	@ManyToOne(() => Remittance, { onDelete: 'SET NULL', nullable: true })
	@JoinColumn({ name: 'ftrRemessa' })
	remittance: Remittance

	@Column({ name: 'ftrRegistrada', nullable: true, length: 4 })
	registered: string

	@Column({ name: 'ftrEmail', nullable: true, length: 4 })
	email: string

	@Column({ name: 'ftrAlteracaoData', nullable: true, type: 'datetime' })
	modificationDate: Date

	@ManyToOne(() => User, { onDelete: 'SET NULL', nullable: true })
	@JoinColumn({ name: 'ftrAlteracaoUsuario' })
	modificationUser: User

	@Column({ name: 'ftrCodigo', nullable: true, unique: true })
	code: number

	@Column({ name: 'ftrCondominio21', nullable: true, unique: true })
	condominium21: number
}
