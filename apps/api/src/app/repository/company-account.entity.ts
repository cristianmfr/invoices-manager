import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
} from 'typeorm'
import { User } from './user.entity'
import { Company } from './company.entity'

@Entity({ name: 'dad_empresa_conta', schema: 'saraserra' })
export class CompanyAccount {
	@PrimaryGeneratedColumn({ name: 'ecnId' })
	id: number

	@Column({ name: 'ecnDescricao', nullable: true, length: 255 })
	description: string

	@Column({ name: 'ecnBandeira', nullable: true, length: 18 })
	flag: string

	@Column({ name: 'ecnBanco', nullable: true, length: 10 })
	bank: string

	@Column({
		name: 'ecnAgencia',
		nullable: true,
		type: 'decimal',
		precision: 20,
	})
	agency: number

	@Column({
		name: 'ecnAgenciaDig',
		nullable: true,
		type: 'decimal',
		precision: 20,
	})
	agencyDigit: number

	@Column({ name: 'ecnConta', nullable: true, type: 'decimal', precision: 20 })
	account: number

	@Column({
		name: 'ecnContaDig',
		nullable: true,
		type: 'decimal',
		precision: 20,
	})
	accountDigit: number

	@Column({
		name: 'ecnOperacao',
		nullable: true,
		type: 'decimal',
		precision: 20,
	})
	operation: number

	@Column({
		name: 'ecnCarteira',
		nullable: true,
		type: 'decimal',
		precision: 20,
	})
	wallet: number

	@Column({ name: 'ecnCodigo', nullable: true, type: 'decimal', precision: 20 })
	code: number

	@Column({ name: 'ecnTipo', nullable: true, length: 24 })
	type: string

	@ManyToOne(() => Company, { onDelete: 'CASCADE', nullable: false })
	@JoinColumn({ name: 'ecnEmpresa' })
	company: Company

	@Column({
		name: 'ecnSituacao',
		nullable: true,
		length: 10,
		default: 'INATIVA',
	})
	status: string

	@Column({ name: 'ecnAlteracaoData', nullable: true, type: 'datetime' })
	modificationDate: Date

	@ManyToOne(() => User, { onDelete: 'SET NULL', nullable: true })
	@JoinColumn({ name: 'ecnAlteracaoUsuario' })
	modificationUser: User
}
