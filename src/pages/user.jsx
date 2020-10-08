import React from "react";
import { useEffect, useState } from "react";
import { Avatar, Button, Divider, Card } from 'antd';

import { withRouter } from "react-router-dom";
import { getInfoApi } from "../services/auth";
import { removeToken } from "../utils/tools";

function User(props) {
  const [data, setData] = useState({})
  useEffect(() => {
    getInfoApi().then(res => {
      console.log(res);
      setData(res)
    })
  }, []);
  const gridStyle = {
    width:375,
    textAlign: 'left',
  };
  return (
    <div>
      <h1>个人中心</h1>
      <Avatar size="large" src={data.avatar} />
      <h5>{data.nickName}</h5>
      <Divider />
      <Card bordered={false}>
        <Card.Grid onClick={()=>{
          console.log('woyao跳转到我的收藏页面');
          props.history.push('/myFavs');
        }} style={gridStyle}>我的收藏</Card.Grid>
        <Card.Grid onClick={()=>{
          console.log('woyao修改密码');
          props.history.push('/modifyPassword');
        }} style={gridStyle}>修改密码</Card.Grid>
        <Card.Grid onClick={()=>{
          console.log('woyao修改个人信息');
          props.history.push('/modifyMyInfo');
        }} style={gridStyle}>修改个人信息</Card.Grid>
      </Card>


      <Button
        onClick={() => {
          removeToken(); // 清除token
          props.history.push("/");
        }}
      >
        退出登录
      </Button>
    </div>
  );
}

export default withRouter(User);
