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

@Entity({ name: 'dad_empresa', schema: 'saraserra' })
export class Company {
	@PrimaryGeneratedColumn({ name: 'epsId' })
	id: number

	@Column({ name: 'epsNome', nullable: true, length: 255 })
	name: string

	@Column({ name: 'epsCadastro', nullable: true, length: 4 })
	registration: string

	@Column({ name: 'epsCNPJ', nullable: true, length: 18 })
	cnpj: string

	@Column({ name: 'epsCPF', nullable: true, length: 12 })
	cpf: string

	@Column({ name: 'epsRazaoSocial', nullable: true, length: 255 })
	companyName: string

	@Column({ name: 'epsEndereco', nullable: true, length: 255 })
	address: string

	@Column({ name: 'epsComplemento', nullable: true, length: 255 })
	complement: string

	@Column({ name: 'epsNumero', nullable: true, type: 'decimal', precision: 20 })
	number: number

	@Column({ name: 'epsBairro', nullable: true, length: 255 })
	neighborhood: string

	@Column({ name: 'epsCEP', nullable: true, length: 9 })
	zipCode: string

	@Column({ name: 'epsTelefone', nullable: true, length: 15 })
	phone: string

	@Column({ name: 'epsCelular', nullable: true, length: 15 })
	cellphone: string

	@Column({ name: 'epsEmail', nullable: true, length: 255 })
	email: string

	@Column({
		name: 'epsSituacao',
		nullable: true,
		length: 10,
		default: 'INATIVA',
	})
	status: string

	@Column({ name: 'epsAlteracaoData', nullable: true, type: 'datetime' })
	modificationDate: Date

	@ManyToOne(() => City, { onDelete: 'RESTRICT', nullable: false })
	@JoinColumn({ name: 'epsCidade' })
	city: City

	@ManyToOne(() => State, { onDelete: 'RESTRICT', nullable: false })
	@JoinColumn({ name: 'epsEstado' })
	state: State

	@ManyToOne(() => User, { onDelete: 'SET NULL', nullable: true })
	@JoinColumn({ name: 'epsAlteracaoUsuario' })
	modificationUser: User
}
