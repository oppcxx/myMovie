import React from "react";
import { setToken } from "../utils/tools";
import { Form, Input, Button, Checkbox, message, Upload } from 'antd';
import { regApi } from "../services/auth";
import { Link } from "react-router-dom";
import { UploadOutlined } from '@ant-design/icons';

function Reg(props) {

    const uploadImg = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const onFinish = values => {
        console.log('Success:', values);
        regApi({
            userName: values.username,
            password: values.password,
            nickName: values.nickName,
            gender: values.gender,
            avatar: values.avatar.response.url
        }).then(res => {
            console.log(res);
            if (res.code === 1) {
                // setToken(res.token);//设置token
                // props.history.push('/user')
            } else {
                message.error(res.info)
            }
        })
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

                <Form.Item
                    label="昵称"
                    name="nickName"
                    rules={[{ required: false, message: '请输入昵称!' }]}
                >
                    <Input />
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
                    <Upload {...uploadImg}>
                        <Button icon={<UploadOutlined />}>点击上传头像</Button>
                    </Upload>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>记住密码</Checkbox>
                    <Link style={{ marginBottom: 1 }} to={"/reg"}>已有账号？去登录</Link>

                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        注册
        </Button>
                </Form.Item>
            </Form>

        </div>
    );
}

export default Reg;
