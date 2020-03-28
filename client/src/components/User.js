import React from "react";
import FollowButton from "./controls/FollowButton";

const User =  ({user}) => {
    return (
        <tr>
            <th scope="col">{user.name}</th>
            <th scope="col">{user.group_name}</th>
            <th scope="col">{user.sub_count}</th>
            <th scope="col"> <FollowButton following={true} onClick={() => {}}/> </th>
        </tr>
    );
};

export default User;