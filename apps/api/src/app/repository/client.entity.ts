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

@Entity({ name: 'dad_cliente', schema: 'saraserra' })
export class Client {
	@PrimaryGeneratedColumn({ name: 'cltId' })
	id: number

	@Column({ name: 'cltNome', nullable: true, length: 255 })
	name: string

	@Column({ name: 'cltCadastro', nullable: true, length: 4 })
	registration: string

	@Column({ name: 'cltCNPJ', nullable: true, length: 18 })
	cnpj: string

	@Column({ name: 'cltCPF', nullable: true, length: 12 })
	cpf: string

	@Column({ name: 'cltRazaoSocial', nullable: true, length: 255 })
	companyName: string

	@Column({ name: 'cltEndereco', nullable: true, length: 255 })
	address: string

	@Column({ name: 'cltComplemento', nullable: true, length: 255 })
	complement: string

	@Column({ name: 'cltNumero', nullable: true, type: 'decimal', precision: 20 })
	number: number

	@Column({ name: 'cltBairro', nullable: true, length: 255 })
	neighborhood: string

	@Column({ name: 'cltCEP', nullable: true, length: 9 })
	zipCode: string

	@ManyToOne(() => City, (city) => city.clients, {
		onDelete: 'RESTRICT',
		nullable: true,
	})
	@JoinColumn({ name: 'cltCidade' })
	city: City

	@ManyToOne(() => State, { onDelete: 'RESTRICT', nullable: true })
	@JoinColumn({ name: 'cltEstado' })
	state: State

	@ManyToOne(() => User, { onDelete: 'SET NULL', nullable: true })
	@JoinColumn({ name: 'cltAlteracaoUsuario' })
	modificationUser: User

	@Column({ name: 'cltAlteracaoData', nullable: true, type: 'datetime' })
	modificationDate: Date

	@Column({ name: 'cltTelefone', nullable: true, length: 15 })
	phone: string

	@Column({ name: 'cltCelular', nullable: true, length: 15 })
	cellphone: string

	@Column({ name: 'cltEmail', nullable: true, length: 255 })
	email: string

	@Column({ name: 'cltResponsavel', nullable: true, length: 255 })
	responsible: string

	@Column({ name: 'cltFinanceiro', nullable: true, length: 255 })
	financial: string

	@Column({ name: 'cltFinanceiroTelefone', nullable: true, length: 15 })
	financialPhone: string

	@Column({ name: 'cltFinanceiroEmail1', nullable: true, length: 255 })
	financialEmail1: string

	@Column({ name: 'cltFinanceiroEmail2', nullable: true, length: 255 })
	financialEmail2: string

	@Column({ name: 'cltFinanceiroEmail3', nullable: true, length: 255 })
	financialEmail3: string

	@Column({ name: 'cltFinanceiroEmail4', nullable: true, length: 255 })
	financialEmail4: string

	@Column({
		name: 'cltSituacao',
		nullable: true,
		length: 10,
		default: 'INATIVO',
	})
	status: string
}
