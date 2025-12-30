import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    // Giả lập đăng nhập: bất kỳ username/pass nào cũng được
    if (values.username === 'admin' && values.password === '123456') {
      localStorage.setItem('isLoggedIn', 'true');
      message.success('Đăng nhập thành công!');
      navigate('/');
    } else {
      message.error('Tài khoản: admin / Mật khẩu: 123456');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f2f5' }}>
      <Card title="Đăng nhập hệ thống" style={{ width: 400 }}>
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Vui lòng nhập admin' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Vui lòng nhập 123456' }]}>
            <Input.Password />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>Đăng nhập</Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;