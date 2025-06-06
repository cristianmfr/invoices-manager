import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
	OneToMany,
} from 'typeorm'
import { User } from './user.entity'
import { InvoiceSubcategory } from './invoice-subcategory.entity'

@Entity({ name: 'dad_fatura_categoria', schema: 'saraserra' })
export class InvoiceCategory {
	@PrimaryGeneratedColumn({ name: 'fctId' })
	id: number

	@Column({ name: 'fctNome', nullable: true, length: 255 })
	name: string

	@Column({ name: 'fctGrupo', nullable: true, length: 10 })
	group: string

	@OneToMany(() => InvoiceSubcategory, (subcategory) => subcategory.category)
	subcategories: InvoiceSubcategory[]

	@Column({
		name: 'fctSituacao',
		nullable: true,
		length: 10,
		default: 'INATIVA',
	})
	status: string

	@Column({ name: 'fctAlteracaoData', nullable: true, type: 'datetime' })
	modificationDate: Date

	@ManyToOne(() => User, { onDelete: 'SET NULL', nullable: true })
	@JoinColumn({ name: 'fctAlteracaoUsuario' })
	modificationUser: User
}
