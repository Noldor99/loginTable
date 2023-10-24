export interface IUser {
  id: number
  email: string
  password: string
}

export interface IUserInfo {
  id: number
  email: string
  token: string
}

export interface ILogin {
  username: string
  password: string
}
