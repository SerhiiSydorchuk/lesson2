import {IUser} from "./IUser";

export interface IUserResp {
    users:IUser[]
    limit:number
    total:number
    skip:number
}