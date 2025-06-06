export type Associate = {
	id: number
	name: string
	registration: string
	cnpj: string
	cpf: string
	stateRegistration: string
	companyName: string
	responsible: string
	rg: string
	birthDate: string
	maritalStatus: string
	phone1: string
	phone2: string
	phone3: string
	cellphone1: string
	cellphone2: string
	cellphone3: string
	email1: string
	email2: string
	email3: string
	spouse: string
	spouseBirthDate: string
	spousePhone: string
	registrationDate: string
	acquisitionDate: string
	moveDate: string
	observation: string
	status: string
	modificationDate: string
}

export type Subcategory = {
	id: number
	name: string
	status: string
	modificationDate: string | null
}

export type Company = {
	id: number
	name: string
	registration: string
	cnpj: string
	cpf: string
	companyName: string
	address: string
	complement: string
	number: string
	neighborhood: string
	zipCode: string
	phone: string
	cellphone: string
	email: string
	status: string
	modificationDate: string
}

export type Invoice = {
	id: number
	description: string
	dueDate: string
	paymentDate: string | null
	competenceDate: string
	dueValue: string
	paymentValue: string | null
	discountValue: string | null
	interestValue: string | null
	condominiumValue: string
	reserveFundValue: string
	waterMaintenanceValue: string
	initialDueDate: string
	hideInstallment: string | null
	form: string
	formFlag: string
	formBank: string
	formNumber: string
	observation: string
	associate: Associate
	subcategory: Subcategory
	company: Company
	status: string
	registration: string
	registered: string | null
	email: string | null
	modificationDate: string
	code: string | null
	condominium21: string | null
}
