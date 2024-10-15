import React, {FC} from 'react';
import {IPost} from "../../model/IPost";
import Post from "../Post/Post";

type IPostsProps= {
    posts:IPost[]
}

const Posts:FC<IPostsProps> = ({posts}) => {


    return (
        <div>
            {
                posts.map(post=> <Post post={post} key={post.id}/>)
            }
        </div>
    );
};

export default Posts;