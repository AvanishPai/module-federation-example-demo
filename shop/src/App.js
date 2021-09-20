import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ProductsPage from "./modules/products";

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <ProductsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
