import React, { useState, useEffect } from "react";
import '../App.css'
import { Card } from 'antd'
import { useParams, useLocation } from "react-router-dom";
import {StarFilled} from '@ant-design/icons'
function Detail(props) {
  console.log(props);
  const lo = useLocation(); // 可以获取当前当前url中的参数
  console.log(lo);
  const params = useParams(); // 可以获取url中占位符传递的数据
  console.log(params);
  return (
    <div>
      <iframe
        width="375px"
        title="我是一个网页"
        height="200px"
        src={"http://jx.618g.com/?url=" + (lo.state ? lo.state.playUrl : "")}
      />
      <Card style={{ width: 375 }} title={lo.state.name} extra={<StarFilled />}>
        <p style={{textIndent:15,textAlign:'left',color:'#666',lineHeight:2}}>{lo.state.description}</p>
      </Card>
    </div>
  );
}

export default Detail;
