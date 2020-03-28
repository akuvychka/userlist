import React, {useEffect} from 'react';
import UserList from "./components/UserList";
import {connect, useDispatch} from "react-redux";
import {getMe, getUsers} from "./redux/actions";

function App({user_name}) {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMe());
        dispatch(getUsers());
        }, [dispatch]);

  return (
    <div className="container pt-3">
      <div className="row">
          <div className="col">
            <h1> Welcome, {user_name}</h1>
          </div>
      </div>
      <div className="row">
          <div className="col">
              <UserList />
          </div>
      </div>

    </div>
  );
}

const mapStateToProps = state => {
    return {
        user_name: state.me.me.name
    }
};

export default connect(mapStateToProps, null)(App);
