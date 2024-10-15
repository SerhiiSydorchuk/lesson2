import React, {FC} from 'react';
import {IUser} from "../../model/IUser";

type UserProps =  {
    user:IUser
    lift: ((id: number) => void)
}

const User:FC<UserProps> = ({lift, user}) => {
    return (
        <div>
            {user.id}-{user.firstName} Age-{user.age}
             <button onClick={ () =>
                 lift(user.id)
             }>click</button>
        </div>
    );
};

export default User;