import React, {useCallback} from "react";
import FollowButton from "./controls/FollowButton";
import {connect, useDispatch, useSelector} from "react-redux";
import {followUser, unFollowUser} from "../redux/actions";

const User =  ({user, myFollowings}) => {
    const dispatch = useDispatch();
    const user_mapping = useSelector(state => state.me.mappings).find(mapped_user => mapped_user.user_id === user.id);

    const onFollowUnFollowAction = useCallback(() => {
        if (myFollowings.indexOf(user.id) > -1) {
            dispatch(unFollowUser(user_mapping));
        } else {
            dispatch(followUser(user.id));
        }
    }, [dispatch, myFollowings, user, user_mapping]);

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