import React, { useState } from "react";
import UserList from "./UserList";
import "./App.css";

export default function App() {
  const [showUsers, setShowUsers] = useState(true);

  return (
    <div className="container">
      <h1>React useEffect & Lifecycle Demo</h1>
      <button onClick={() => setShowUsers(!showUsers)}>
        {showUsers ? "UserList'i Gizle (Unmount)" : "UserList'i Göster (Mount)"}
      </button>

      <div className="user-section">
        {showUsers && <UserList />}
      </div>
    </div>
  );
}
