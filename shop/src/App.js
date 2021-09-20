import React from "react";
import RemoteButton from 'app2/Button';
import LocalButton from './Button'

const App = () => (
  <div>
    <h1>App 1</h1>
    <LocalButton />
    <RemoteButton />
  </div>
);

export default App;
