import React from "react";
import User from "./User";
import { connect } from "react-redux";

const UserList =  ({syncedUsers}) => {
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

const mapStateToProps = state => {
    return {
        syncedUsers: state.users
    }
};

export default connect(mapStateToProps, null)(UserList);