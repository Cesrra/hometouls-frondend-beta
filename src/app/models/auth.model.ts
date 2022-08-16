export interface ILogin {
  email: string,
  password: string
}

export interface IUser {
  _id: number;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUserResponse {
  jwt: string;
  user: IUser;
}
