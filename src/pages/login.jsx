import React from "react";
import { setToken } from "../utils/tools";
import { Form, Input, Button, Checkbox, message } from 'antd';
import { loginApi } from "../services/auth";
import { Link } from "react-router-dom";

function Login(props) {
  

  const onFinish = values => {
    console.log('Success:', values);
    loginApi({
      userName:values.username,
      password:values.password
    }).then(res =>{
      console.log(res);
      if(res.code === 1){
        setToken(res.token);//设置token
        props.history.push('/user')
      }else{
        message.error(res.info)
      }
    })
    // setToken("123"); // 设置token
    // props.history.push("/user"); // 跳转
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <h1>login</h1>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item  name="remember" valuePropName="checked">
          <Checkbox>记住密码</Checkbox> 
          <Link style={{marginBottom:1}} to={"/reg"}>没有账号？去注册</Link>
          
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
        </Button>
        </Form.Item>
      </Form>

    </div>
  );
}

export default Login;
