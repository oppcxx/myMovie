import React from "react";
import { setToken } from "../utils/auth";

function Login(props) {
  return (
    <div>
      <h1>登录页</h1>
      <button
        onClick={() => {
          setToken("123"); // 设置token
          props.history.push("/user"); // 跳转
        }}
      >
        登录
      </button>
    </div>
  );
}

export default Login;
