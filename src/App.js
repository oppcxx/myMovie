import React from "react";
import { Link, Switch, Route, NavLink } from "react-router-dom";
import Home from "./pages/home";
import List from "./pages/list";
import Login from "./pages/login";
import User from "./pages/user";
import Cart from "./pages/cart";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import { routes } from "./router";

function App() {
  return (
    <div className="App">
      {/* <NavLink exact to="/">
        【首页】
      </NavLink>
      <NavLink to="/list">【热映】</NavLink> */}
      {routes.map((item) => (
        <NavLink key={item.path} to={item.path} exact={item.exact}>
          【{item.label}】
        </NavLink>
      ))}
      <NavLink to="/cart">【购物车】</NavLink>
      <NavLink to="/user">【用户中心】</NavLink>
      <hr />
      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route path="/list" component={List} /> */}
        {routes.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            component={item.component}
            exact={item.exact}
          />
        ))}
        <PrivateRoute path="/cart">
          <Cart />
        </PrivateRoute>
        <PrivateRoute path="/user">
          <User />
        </PrivateRoute>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
