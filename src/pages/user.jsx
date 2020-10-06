import React from "react";
import { withRouter } from "react-router-dom";
import { removeToken } from "../utils/auth";

function User(props) {
  return (
    <div>
      <h1>个人中心</h1>
      <button
        onClick={() => {
          removeToken(); // 清除token
          props.history.push("/");
        }}
      >
        退出
      </button>
    </div>
  );
}

export default withRouter(User);
