import React from "react";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getInfoApi } from "../services/auth";
import { removeToken } from "../utils/tools";

function User(props) {
  useEffect(()=>{
    getInfoApi().then(res=> {
      console.log(res);
    })
  },[])
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
