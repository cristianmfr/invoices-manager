import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
} from 'typeorm'
import { User } from './user.entity'
import { InvoiceCategory } from './invoice-category.entity'

@Entity({ name: 'dad_fatura_subcategoria', schema: 'saraserra' })
export class InvoiceSubcategory {
	@PrimaryGeneratedColumn({ name: 'fscId' })
	id: number

	@Column({ name: 'fscNome', nullable: true, length: 255 })
	name: string

	@ManyToOne(() => InvoiceCategory, (category) => category.subcategories, {
		onDelete: 'RESTRICT',
		nullable: false,
	})
	@JoinColumn({ name: 'fscCategoria' })
	category: InvoiceCategory

	@Column({
		name: 'fscSituacao',
		nullable: true,
		length: 10,
		default: 'INATIVA',
	})
	status: string

	@Column({ name: 'fscAlteracaoData', nullable: true, type: 'datetime' })
	modificationDate: Date

	@ManyToOne(() => User, { onDelete: 'SET NULL', nullable: true })
	@JoinColumn({ name: 'fscAlteracaoUsuario' })
	modificationUser: User
}
