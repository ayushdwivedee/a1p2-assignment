// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return <div>{/* complete the missing code */}
  {isLoggedIn ? <h3>Hello, User!</h3> : <h3>Access Denied</h3>}
  </div>;
}

export default LoginMessage;
