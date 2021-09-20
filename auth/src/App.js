import React from "react";

import LoginPage from "./LoginPage";

const App = () => (
  <div>
    <LoginPage onLoginSuccess={() => alert("logged in successfuly")} />
  </div>
);

export default App;
