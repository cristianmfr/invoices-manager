import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity({ name: 'dad_usuario', schema: 'saraserra' })
export class User {
	@PrimaryGeneratedColumn({ name: 'usrId' })
	id: number

	@Column({ name: 'usrNome', nullable: true, length: 255 })
	name: string

	@Column({ name: 'usrEmail', length: 255, unique: true })
	email: string

	@Column({ name: 'usrSenha', length: 32 })
	password: string

	@Column({ name: 'usrPermissao', nullable: true, type: 'text' })
	permission: string

	@Column({ name: 'usrNivel', nullable: true, length: 14, default: 'USUARIO' })
	level: string

	@Column({
		name: 'usrSituacao',
		nullable: true,
		length: 10,
		default: 'INATIVO',
	})
	status: string

	@Column({ name: 'usrAcessoData', nullable: true, type: 'datetime' })
	accessDate: Date

	@Column({
		name: 'usrAcessoQuantidade',
		nullable: true,
		type: 'decimal',
		precision: 20,
	})
	accessQuantity: number

	@Column({ name: 'usrAlteracaoData', nullable: true, type: 'datetime' })
	modificationDate: Date

	@Column({ name: 'usrAlteracaoUsuario', nullable: true })
	modificationUser: number
}
