import React, { useContext } from "react";
import { UserContext } from "../userContext";
import { login } from "../utils/login";

export const Index = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="text-center">
      <h2>Hello</h2>
      <button className="btn btn-primary">hello</button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button onClick={() => setUser(null)}>logout</button>
      ) : (
        <button
          className="btn btn-outline-primary"
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      )}
    </div>
  );
};
