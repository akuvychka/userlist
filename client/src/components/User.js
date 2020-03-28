import React from "react";
import FollowButton from "./controls/FollowButton";
import { connect } from "react-redux";

const User =  ({user, myFollowings}) => {
    return (
        <tr>
            <th scope="col">{user.name}</th>
            <th scope="col">{user.group_name}</th>
            <th scope="col">{user.sub_count}</th>
            <th scope="col"> <FollowButton following={myFollowings.indexOf(user.id) > -1} onClick={() => {}}/> </th>
        </tr>
    );
};

const mapStateToProps = state => {
    return {
        myFollowings: state.me.follows
    }
};

export default connect(mapStateToProps, null)(User);