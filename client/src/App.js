import React from 'react';
import UserList from "./components/UserList";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
          <div className="col">
            <h1> Welcome, User</h1>
          </div>
      </div>
      <div className="row">
          <div className="col">
              <UserList users={[]}/>
          </div>
      </div>

    </div>
  );
}

export default App;
