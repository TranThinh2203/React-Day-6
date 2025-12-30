import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { UserOutlined, ShoppingCartOutlined, DashboardOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Xóa trạng thái login
    navigate('/login');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)', textAlign: 'center', color: 'white' }}>ADMIN</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}><Link to="/">Dashboard</Link></Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}><Link to="/users">Quản lý Users</Link></Menu.Item>
          <Menu.Item key="3" icon={<ShoppingCartOutlined />}><Link to="/products">Quản lý Sản phẩm</Link></Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: '0 20px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Button icon={<LogoutOutlined />} onClick={handleLogout}>Đăng xuất</Button>
        </Header>
        <Content style={{ margin: '16px' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {/* Outlet là nơi nội dung các trang con (UserList, ProductList) sẽ hiển thị */}
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;