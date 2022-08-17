export interface ILogin {
  email: string,
  password: string
}

export interface IUser {
  _id: number;
  name: string;
  email: string;
  phone: number
  birthdate?: Date
  location?: string
  password: string
}

export interface IUserResponse {
  user: IUser;
}
