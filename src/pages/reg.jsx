import React, { useState } from "react";
import { setToken } from "../utils/tools";
import { Form, Input, Button, Checkbox, message, Upload } from 'antd';
import { regApi } from "../services/auth";
import { Link } from "react-router-dom";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

// function getBase64(img, callback) {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result));
//     reader.readAsDataURL(img);
// }

// function beforeUpload(file) {
//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJpgOrPng) {
//         message.error('You can only upload JPG/PNG file!');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//         message.error('Image must smaller than 2MB!');
//     }
//     return isJpgOrPng && isLt2M;
// }


function Reg(props) {
    // const [loading, setLoading] = useState(false)
    // const [imageUrl, setImageUrl] = useState('')
    // const handleChange = info => {
    //     if (info.file.status === 'uploading') {
    //         setLoading(true);
    //         console.log(info);
    //         return;
    //     }
    //     if (info.file.status === 'done') {
    //         // Get this url from response in real world.
    //         getBase64(info.file.originFileObj, imageUrl =>
    //             setImageUrl(imageUrl),
    //             setLoading(false)
    //         );
    //     }
    // }
    // const uploadButton = (
    //     <div>
    //         {loading ? <LoadingOutlined /> : <PlusOutlined />}
    //         <div style={{ marginTop: 8 }}>Upload</div>
    //     </div>
    // );
    const onFinish = values => {
        console.log('Success:', values);
        const params = {
            userName: values.username,
            password: values.password,
            nickName: values.nickName,
            gender: values.gender,
            avatar: values.avatar
        }
        console.log(params);
        regApi(params).then(res => {
            console.log(res);
            if (res.code === 1) {
                setToken(res.token);//设置token
                props.history.push('/user')
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
                    <Input />
                    {/* <Upload {...uploadImg}>
                        <Button icon={<UploadOutlined />}>点击上传头像</Button>
                    </Upload> */}
                    {/* <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload> */}

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
