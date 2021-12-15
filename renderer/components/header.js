import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [login, setLogin] = useState(false);

  if (typeof window === "undefined") return null;
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) setLogin(true);
  }, [token]);
  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/home");
    }
  };

  return (
    <div
      style={{
        background: `rebeccapurple`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `1.45rem 1.0875rem`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ margin: 0 }}>
          <span
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Young
          </span>
        </h1>
        {token ? (
          <button onClick={logout}>logout</button>
        ) : (
          <button
            onClick={() => {
              router.push("/login");
            }}
          >
            login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
