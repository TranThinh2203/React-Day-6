import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Popconfirm, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy dữ liệu từ API
    axios.get('https://fakestoreapi.com/users')
      .then(res => setUsers(res.data))
      .catch(err => message.error("Không thể tải dữ liệu"));
  }, []);

  const handleDelete = (id) => {
    // Xóa trên state (giả lập)
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
    message.success("Xóa người dùng thành công");
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Họ tên', key: 'name', render: (text, record) => `${record.name.firstname} ${record.name.lastname}` },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    {
      title: 'Hành động',
      key: 'action',
      render: (record) => (
        <Space>
          <Button onClick={() => navigate(`/users/${record.id}`)}>Xem</Button>
          <Popconfirm title="Bạn có chắc muốn xóa?" onConfirm={() => handleDelete(record.id)}>
            <Button danger>Xóa</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <Table dataSource={users} columns={columns} rowKey="id" />
    </div>
  );
};

export default UserList;