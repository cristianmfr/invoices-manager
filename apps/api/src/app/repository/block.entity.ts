import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
} from 'typeorm'
import { User } from './user.entity'

@Entity({ name: 'dad_quadra', schema: 'saraserra' })
export class Block {
	@PrimaryGeneratedColumn({ name: 'qdrId' })
	id: number

	@Column({ name: 'qdrNome', nullable: true, length: 255 })
	name: string

	@Column({
		name: 'qdrSituacao',
		nullable: true,
		length: 10,
		default: 'INATIVA',
	})
	status: string

	@Column({ name: 'qdrAlteracaoData', nullable: true, type: 'datetime' })
	modificationDate: Date

	@Column({ name: 'qdrAlteracaoUsuario', nullable: true })
	modificationUserId: number

	@ManyToOne(() => User)
	@JoinColumn({ name: 'qdrAlteracaoUsuario' })
	modificationUser: User
}
