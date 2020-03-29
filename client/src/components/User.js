import React, { useCallback } from 'react'
import { createSelector } from 'reselect'
import { useDispatch, useSelector} from "react-redux";

import FollowButton from "./controls/FollowButton";
import {followUser, unFollowUser} from "../redux/actions";

const userMappingSelector = createSelector(
  state => state.me.mappings,
  (_, { user }) => user,
  (mappings, user) => mappings.find(mapped_user => mapped_user.user_id === user.id)
)

const isFollowingSelector = createSelector(
  state => state.me.follows,
  (_, { user }) => user,
  (myFollowings, user) => myFollowings.indexOf(user.id) > -1
);

const User =  ({ user }) => {
    const dispatch = useDispatch();
    const isFollowing = useSelector(state => isFollowingSelector(state, { user }));
    const user_mapping = useSelector(state => userMappingSelector(state, { user }));

    const onFollowUnFollowAction = useCallback(() => {
        if (isFollowing) {
            dispatch(unFollowUser(user_mapping));
        } else {
            dispatch(followUser(user.id));
        }
    }, [dispatch, isFollowing, user, user_mapping]);

    return (
        <tr>
            <th scope="col">{user.name}</th>
            <th scope="col">{user.group_name}</th>
            <th scope="col">{user.sub_count}</th>
            <th scope="col"> <FollowButton following={isFollowing} onClick={onFollowUnFollowAction}/> </th>
        </tr>
    );
};

export default React.memo(User)