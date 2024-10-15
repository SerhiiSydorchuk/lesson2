import React, {FC, useEffect, useState} from 'react';
import User from "../User/User";
import {IUser} from "../../model/IUser";
import {getUsers} from "../../servises/api.service";

type UsersProps = {
    lift: ((id: number) => void)
}

const Users:FC<UsersProps> = ({lift}) => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getUsers().then(value => setUsers(value))
    }, []);
    return (
        <div>
            {
                users.map(user=> <User key={user.id} user={user} lift={lift}/>)}
        </div>
    );
};

export default Users;