import React from 'react'
import { useEffect, useState } from "react";
import { Avatar, Button, Divider, Card, Form, message,Input } from 'antd';
import { getInfoApi,modifyMyInfoApi } from "../services/auth";
import { setToken } from '../utils/tools';

function ModifyMyInfo(props) {
    const [data, setData] = useState({})
    useEffect(() => {
        getInfoApi().then(res => {
            console.log(res);
            setData(res)
        })
    }, []);
    const gridStyle = {
        width: 375,
        textAlign: 'left',
    };
    
    const onFinish = values =>{
        console.log('Success',values);
        const params = {
            nickName: values.nickName,
            gender: values.gender,
            avatar: values.avatar
        };
        console.log(params);
        modifyMyInfoApi(params).then(res => {
            console.log(res);
            if(res.code == 1){
                props.history.push('/user')
            }else{
                message.error(res.info)
            }
        })
    }

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <h1>我是修改个人信息页面</h1>
            <Avatar size="large" src={data.avatar} />
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="昵称"
                    name="nickName"
                    rules={[{ required: false, message: '请输入昵称!' }]}
                >
                    <Input  />
                </Form.Item>

                <Form.Item
                    label="性别"
                    name="gender"
                    rules={[{ required: false, message: '请输入性别!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="头像"
                    name="avatar"
                    rules={[{ required: false, message: '请上传头像!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        确认修改
        </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ModifyMyInfo
