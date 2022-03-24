import { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [data, setData] = useState({
    username: "",
    email: "",
    pass: "",
  });

  const handleLogin = async () => {};
  return (
    <div>
      <h1>login</h1>
      <div>
        <input
          placeholder="Enter your email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </div>
      <div>
        <input
          placeholder="Enter your username"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
      </div>
      <div>
        <input
          placeholder="Enter your password"
          value={data.pass}
          onChange={(e) => setData({ ...data, pass: e.target.value })}
        />
      </div>

      <button onClick={handleLogin}>Login</button>
      <Link to="admin">(directs to admin home page)</Link>
    </div>
  );
}
