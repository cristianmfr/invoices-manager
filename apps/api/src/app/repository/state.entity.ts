import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { City } from './city.entity'

@Entity({ name: 'sys_estado', schema: 'saraserra' })
export class State {
	@PrimaryGeneratedColumn({ name: 'estId' })
	id: number

	@Column({ name: 'estSigla', nullable: true, length: 4 })
	abbreviation: string

	@Column({ name: 'estNome', nullable: true, length: 255 })
	name: string

	@OneToMany(() => City, (city) => city.state)
	cities: City[]
}
