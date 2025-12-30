import React, { useState, useEffect } from 'react';
import { Table, Button, Image, Space, message } from 'antd';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data));
  }, []);

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
    message.success("Đã xóa sản phẩm khỏi danh sách local");
  };

  const columns = [
    { title: 'Hình ảnh', dataIndex: 'image', key: 'image', render: (img) => <Image src={img} width={50} /> },
    { title: 'Tên sản phẩm', dataIndex: 'title', key: 'title' },
    { title: 'Giá', dataIndex: 'price', key: 'price', render: (price) => `$${price}` },
    { title: 'Danh mục', dataIndex: 'category', key: 'category' },
    {
      title: 'Hành động',
      key: 'action',
      render: (record) => (
        <Button danger onClick={() => deleteProduct(record.id)}>Xóa</Button>
      ),
    },
  ];

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <Table dataSource={products} columns={columns} rowKey="id" />
    </div>
  );
};

export default ProductList;