import React from "react";
import { useParams, useLocation } from "react-router-dom";

function Detail(props) {
  console.log(props);
  // const qs = new URLSearchParams(props.location.search);
  // console.log(qs.get("id"));
  // console.log(qs.get("name"));
  // console.log(qs.get("playurl"));
  // 在开发的时候个人建议 使用query传参就是url后面跟search的方式
  //  如果需要传递的参数过多，可以使用state传参
  //  不建议使用params占位符的方式传参，因为此种方式只是好看但不好用
  const lo = useLocation(); // 可以获取当前当前url中的参数
  console.log(lo);
  const params = useParams(); // 可以获取url中占位符传递的数据
  console.log(params);
  return (
    <div>
      <h1>我是详情页</h1>
      <iframe
        width="800px"
        title="我是一个网页"
        height="600px"
        src={"http://jx.618g.com/?url=" + (lo.state ? lo.state.playUrl : "")}
      />
    </div>
  );
}

export default Detail;
