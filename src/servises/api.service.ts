import axios from "axios";
import {IUserResp} from "../model/IUserResp";
import {IUser} from "../model/IUser";
import {IPostResp} from "../model/IPostResp";
import {IPost} from "../model/IPost";

let axiosInstance = axios.create({
    baseURL : 'https://dummyjson.com',
    });

 export const getUsers = async (): Promise<IUser[]> => {
    let axiosUsers = await axiosInstance.get<IUserResp>('/users')
    return axiosUsers.data.users
};


export const getPosts = async (id:number):Promise<IPost[]> =>{
    let axiosPost = await axiosInstance.get<IPostResp>('/posts/user/' + id);
    return axiosPost.data.posts
}