import React, { useState, useEffect } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("UserList mount oldu");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });

    return () => {
      console.log("UserList unmount oldu");
    };
  }, []);

  if (loading) return <p>Veriler yükleniyor...</p>;

  return (
    <div>
      <h3>Kullanıcı Listesi</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
