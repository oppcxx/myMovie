import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Login from "./pages/login";
import User from "./pages/user";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import { routes } from "./router";
import Detail from "./pages/detail";
import Reg from "./pages/reg";
import MyFavs from "./pages/myFavs";
import ModifyMyInfo from "./pages/modifyMyInfo";
import ModifyPassword from "./pages/modifyPassword";

function App() {
  return (
    <div className="App">
      {/* 导航栏 */}

      <div className="navv">
        {routes.map((item) => (
          <NavLink key={item.path} to={item.path} exact={item.exact}>
            {item.label}
          </NavLink>
        ))}
        <NavLink to="/user">我的</NavLink>
      </div>
      <div className="content">
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
          <Route path="/detail" component={Detail} />
          <PrivateRoute path="/user">
            <User />
          </PrivateRoute>
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Route path="/myFavs" component={MyFavs} />
          <Route path="/modifyMyInfo" component={ModifyMyInfo} />
          <Route path="/modifyPassword" component={ModifyPassword} />
        </Switch>
      </div>




    </div>
  );
}

export default App;
