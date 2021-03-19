export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  username: string;
  password?: string;
  phoneNumber: string;
  email: string;
  role?: string;
}
