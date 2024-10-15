import {IPost} from "./IPost";

export interface IPostResp{
    posts:IPost[]
    limit:number
    total:number
    skip:number
}