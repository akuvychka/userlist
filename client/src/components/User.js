import React, {useCallback} from "react";
import FollowButton from "./controls/FollowButton";
import {connect, useDispatch} from "react-redux";
import {followUser, unFollowUser} from "../redux/actions";

const User =  ({user, myFollowings}) => {
    const dispatch = useDispatch();

    const onFollowUnFollowAction = useCallback(() => {
        if (myFollowings.indexOf(user.id) > -1) {
            dispatch(unFollowUser(user.id));
        } else {
            dispatch(followUser(user.id));
        }
    }, [dispatch, myFollowings, user]);

    return (
        <tr>
            <th scope="col">{user.name}</th>
            <th scope="col">{user.group_name}</th>
            <th scope="col">{user.sub_count}</th>
            <th scope="col"> <FollowButton following={myFollowings.indexOf(user.id) > -1} onClick={onFollowUnFollowAction}/> </th>
        </tr>
    );
};

const mapStateToProps = state => {
    return {
        myFollowings: state.me.follows
    }
};

export default connect(mapStateToProps, null)(User);