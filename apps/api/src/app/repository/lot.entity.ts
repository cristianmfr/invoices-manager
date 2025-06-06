import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
	OneToMany,
} from 'typeorm'
import { User } from './user.entity'
import { Associate } from './associate.entity'
import { Block } from './block.entity'
import { Invoice } from './invoice.entity'

@Entity({ name: 'dad_lote', schema: 'saraserra' })
export class Lot {
	@PrimaryGeneratedColumn({ name: 'lttId' })
	id: number

	@OneToMany(() => Invoice, (invoice) => invoice.lot)
	invoices: Invoice[]

	@Column({ name: 'lttNome', nullable: true, length: 255 })
	name: string

	@Column({ name: 'lttLogradouro', nullable: true, length: 255 })
	street: string

	@Column({
		name: 'lttArea',
		nullable: true,
		type: 'decimal',
		precision: 20,
		scale: 2,
	})
	area: number

	@Column({ name: 'lttHidrometro', nullable: true, length: 20 })
	waterMeter: string

	@Column({ name: 'lttDataVenda', nullable: true, type: 'date' })
	saleDate: Date

	@Column({ name: 'lttObservacao', nullable: true, type: 'text' })
	observation: string

	@ManyToOne(() => Associate, { onDelete: 'SET NULL' })
	@JoinColumn({ name: 'lttAssociado' })
	associate: Associate

	@ManyToOne(() => Block)
	@JoinColumn({ name: 'lttQuadra' })
	block: Block

	@Column({ name: 'lttEtapa', nullable: true, length: 10 })
	stage: string

	@Column({ name: 'lttSituacao', nullable: true, length: 20 })
	status: string

	@Column({ name: 'lttAlteracaoData', nullable: true, type: 'datetime' })
	modificationDate: Date

	@ManyToOne(() => User, { onDelete: 'SET NULL' })
	@JoinColumn({ name: 'lttAlteracaoUsuario' })
	modificationUser: User
}
