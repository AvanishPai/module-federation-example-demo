import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ProductsPage from "./modules/products";
import LoginPage from "auth/LoginPage";

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/">
          {({ history }) => (
            <LoginPage onLoginSuccess={() => history.push("/products")} />
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
