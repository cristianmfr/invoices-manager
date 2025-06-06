import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
} from 'typeorm'
import { User } from './user.entity'
import { City } from './city.entity'
import { State } from './state.entity'

@Entity({ name: 'dad_fornecedor', schema: 'saraserra' })
export class Supplier {
	@PrimaryGeneratedColumn({ name: 'fndId' })
	id: number

	@Column({ name: 'fndNome', nullable: true, length: 255 })
	name: string

	@Column({ name: 'fndCadastro', nullable: true, length: 4 })
	registration: string

	@Column({ name: 'fndCNPJ', nullable: true, length: 18 })
	cnpj: string

	@Column({ name: 'fndCPF', nullable: true, length: 12 })
	cpf: string

	@Column({ name: 'fndFuncionario', nullable: true, length: 10 })
	employee: string

	@Column({ name: 'fndRazaoSocial', nullable: true, length: 255 })
	companyName: string

	@Column({ name: 'fndEndereco', nullable: true, length: 255 })
	address: string

	@Column({ name: 'fndComplemento', nullable: true, length: 255 })
	complement: string

	@Column({ name: 'fndNumero', nullable: true, type: 'decimal', precision: 20 })
	number: number

	@Column({ name: 'fndBairro', nullable: true, length: 255 })
	neighborhood: string

	@Column({ name: 'fndCEP', nullable: true, length: 9 })
	zipCode: string

	@ManyToOne(() => City, { onDelete: 'RESTRICT', nullable: false })
	@JoinColumn({ name: 'fndCidade' })
	city: City

	@ManyToOne(() => State, { onDelete: 'RESTRICT', nullable: false })
	@JoinColumn({ name: 'fndEstado' })
	state: State

	@Column({ name: 'fndTelefone', nullable: true, length: 15 })
	phone: string

	@Column({ name: 'fndCelular', nullable: true, length: 15 })
	cellphone: string

	@Column({ name: 'fndEmail', nullable: true, length: 255 })
	email: string

	@Column({ name: 'fndResponsavel', nullable: true, length: 255 })
	responsible: string

	@Column({ name: 'fndFinanceiro', nullable: true, length: 255 })
	financial: string

	@Column({ name: 'fndFinanceiroTelefone', nullable: true, length: 15 })
	financialPhone: string

	@Column({ name: 'fndFinanceiroEmail1', nullable: true, length: 255 })
	financialEmail1: string

	@Column({ name: 'fndFinanceiroEmail2', nullable: true, length: 255 })
	financialEmail2: string

	@Column({ name: 'fndFinanceiroEmail3', nullable: true, length: 255 })
	financialEmail3: string

	@Column({ name: 'fndFinanceiroEmail4', nullable: true, length: 255 })
	financialEmail4: string

	@Column({
		name: 'fndSituacao',
		nullable: true,
		length: 10,
		default: 'INATIVO',
	})
	status: string

	@Column({ name: 'fndAlteracaoData', nullable: true, type: 'datetime' })
	modificationDate: Date

	@ManyToOne(() => User, { onDelete: 'SET NULL', nullable: true })
	@JoinColumn({ name: 'fndAlteracaoUsuario' })
	modificationUser: User
}
