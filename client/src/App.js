import React, {useEffect} from 'react';
import UserList from "./components/UserList";
import { useDispatch, useSelector } from 'react-redux'
import {getMe, getUsers} from "./redux/actions";

function App() {
    const user_name = useSelector(state => state.me.me.name)
    const dispatch = useDispatch();


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

export default App;