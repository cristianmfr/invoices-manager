import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
	OneToMany,
} from 'typeorm'
import { State } from './state.entity'
import { Client } from './client.entity'

@Entity({ name: 'sys_cidade', schema: 'saraserra' })
export class City {
	@PrimaryGeneratedColumn({ name: 'cddId' })
	id: number

	@Column({ name: 'cddNome', nullable: true, length: 255 })
	name: string

	@OneToMany(() => Client, (client) => client.city)
	clients: Client[]

	@ManyToOne(() => State, (state) => state.cities, {
		onDelete: 'RESTRICT',
		nullable: false,
	})
	@JoinColumn({ name: 'cddEstado' })
	state: State
}
