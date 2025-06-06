import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
	OneToMany,
} from 'typeorm'
import { User } from './user.entity'
import { Invoice } from './invoice.entity'
import { Lot } from './lot.entity'

@Entity({ name: 'dad_associado', schema: 'saraserra' })
export class Associate {
	@PrimaryGeneratedColumn({ name: 'sscId' })
	id: number

	@OneToMany(() => Invoice, (invoice) => invoice.associate, { cascade: true })
	invoices: Invoice[]

	@OneToMany(() => Lot, (lot) => lot.associate, { cascade: true })
	lots: Lot[]

	@Column({ name: 'sscNome', nullable: true, length: 255 })
	name: string

	@Column({ name: 'sscCadastro', nullable: true, length: 4 })
	registration: string

	@Column({ name: 'sscCNPJ', nullable: true, length: 18 })
	cnpj: string

	@Column({ name: 'sscCPF', nullable: true, length: 12 })
	cpf: string

	@Column({ name: 'sscIE', nullable: true, length: 20 })
	stateRegistration: string

	@Column({ name: 'sscRazaoSocial', nullable: true, length: 255 })
	companyName: string

	@Column({ name: 'sscResponsavel', nullable: true, length: 255 })
	responsible: string

	@Column({ name: 'sscRG', nullable: true, length: 20 })
	rg: string

	@Column({ name: 'sscNascimento', nullable: true, length: 10 })
	birthDate: string

	@Column({ name: 'sscEstadoCivil', nullable: true, length: 12 })
	maritalStatus: string

	@Column({ name: 'sscTelefone1', nullable: true, length: 15 })
	phone1: string

	@Column({ name: 'sscTelefone2', nullable: true, length: 15 })
	phone2: string

	@Column({ name: 'sscTelefone3', nullable: true, length: 15 })
	phone3: string

	@Column({ name: 'sscCelular1', nullable: true, length: 15 })
	cellphone1: string

	@Column({ name: 'sscCelular2', nullable: true, length: 15 })
	cellphone2: string

	@Column({ name: 'sscCelular3', nullable: true, length: 15 })
	cellphone3: string

	@Column({ name: 'sscEmail1', nullable: true, length: 255 })
	email1: string

	@Column({ name: 'sscEmail2', nullable: true, length: 255 })
	email2: string

	@Column({ name: 'sscEmail3', nullable: true, length: 255 })
	email3: string

	@Column({ name: 'sscConjuge', nullable: true, length: 255 })
	spouse: string

	@Column({ name: 'sscConjugeNascimento', nullable: true, length: 10 })
	spouseBirthDate: string

	@Column({ name: 'sscConjugeTelefone', nullable: true, length: 15 })
	spousePhone: string

	@Column({ name: 'sscDataCadastro', nullable: true, type: 'date' })
	registrationDate: Date

	@Column({ name: 'sscDataAquisicao', nullable: true, type: 'date' })
	acquisitionDate: Date

	@Column({ name: 'sscDataMudanca', nullable: true, type: 'date' })
	moveDate: Date

	@Column({ name: 'sscObservacao', nullable: true, type: 'text' })
	observation: string

	@Column({
		name: 'sscSituacao',
		nullable: true,
		length: 10,
		default: 'INATIVO',
	})
	status: string

	@Column({ name: 'sscAlteracaoData', nullable: true, type: 'datetime' })
	modificationDate: Date

	@ManyToOne(() => User, { onDelete: 'SET NULL', nullable: true })
	@JoinColumn({ name: 'sscAlteracaoUsuario' })
	modificationUser: User
}
