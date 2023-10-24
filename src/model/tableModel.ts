export interface ITables {
  count: number
  next: string
  previous: string
  results: ITable[]
}

export interface ITable {
  id: number
  name: string
  email: string
  birthday_date: string
  phone_number: string
  address: string
}

export interface ICreateTable {
  name: string
  email: string
  birthday_date: string
  phone_number: string
  address?: string
}

export interface IUpadteTable extends ICreateTable {}
