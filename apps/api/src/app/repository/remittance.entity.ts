import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'sys_remessa', schema: 'saraserra' })
export class Remittance {
	@PrimaryGeneratedColumn({ name: 'rmsId' })
	id: number

	@Column({ name: 'rmsData', nullable: true, type: 'datetime' })
	date: Date
}
