import React from "react";
import { useHistory } from "react-router-dom";

function Home(props) {
  const his = useHistory();
  console.log(his);
  return (
    <div>
      <button
        onClick={() => {
          // history对象中有当前的历史记录属性和方法 可以实现编程式跳转
          props.history.push("/list");
          // 以下操作的前提是历史记录中有数据
          // props.history.go(-1) // 上一个页面页
          // // props.history.go(1) //
          // props.history.goBack() // 上一个页面
          // props.history.goForward() // 下一个页面
        }}
      >
        跳转到热映页
      </button>
      <h1>我是首页</h1>
    </div>
  );
}

export default Home;
