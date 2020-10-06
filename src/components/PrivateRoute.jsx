import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLogined } from "../utils/auth";
// 创建一个自定义的私有路由组件
function PrivateRoute(props) {
  const { children, path } = props;
  return (
    <Route
      path={path}
      // render 表示路由对象的渲染函数，返回一个组件
      render={() => (isLogined() ? children : <Redirect to="/login" />)}
    />
  );
}

export default PrivateRoute;
