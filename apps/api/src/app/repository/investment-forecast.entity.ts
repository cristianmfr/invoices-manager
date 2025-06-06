import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
} from 'typeorm'
import { User } from './user.entity'

@Entity({ name: 'dad_previsao_conta_investimento', schema: 'saraserra' })
export class InvestmentForecast {
	@PrimaryGeneratedColumn({ name: 'pcvId' })
	id: number

	@Column({ name: 'pcvNome', nullable: true, length: 255 })
	name: string

	@Column({
		name: 'pcvSituacao',
		nullable: true,
		length: 10,
		default: 'INATIVO',
	})
	status: string

	@Column({ name: 'pcvAlteracaoData', nullable: true, type: 'datetime' })
	modificationDate: Date

	@ManyToOne(() => User, { onDelete: 'SET NULL', nullable: true })
	@JoinColumn({ name: 'pcvAlteracaoUsuario' })
	modificationUser: User
}
