import {IUser} from "./userModel";

export interface IUserPage {
  usersList: IUser[];
  totalElements: number;
  totalPages: number;
  pageSize: number;
}
