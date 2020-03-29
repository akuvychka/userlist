import React from "react";
import { useSelector } from 'react-redux'

import User from "./User";

const UserList =  () => {
    const syncedUsers = useSelector(state => state.users);

    return (
        <div>
            <div className="row">
                <h2>Choose users to follow:</h2>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Group name</th>
                    <th scope="col">Follower's count</th>
                    <th scope="col"> </th>
                </tr>
                </thead>
                <tbody>
                {syncedUsers.map( user => <User user={user} key={user.id} /> )}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;