import React, {FC, useState} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import {getPosts} from "./servises/api.service";
import {IPost} from "./model/IPost";
import Posts from "./components/Posts/Posts";


const App:FC = () => {

    const [posts, setPosts] = useState<IPost[]>([])

  const lift = (id:number) =>{
             getPosts(id).then(value=>setPosts(value))
      }




  return (
    <div>
        <hr/>

              <Posts posts={posts}/>

        <hr/>
         <Users lift={lift} />
    </div>
  );
}

export default App;
