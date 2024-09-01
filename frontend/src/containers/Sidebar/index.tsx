import React from 'react';
import { Menu, MenuProps } from "antd";
import { ProductOutlined, SnippetsOutlined, UnorderedListOutlined } from '@ant-design/icons';
import {useLocation, useNavigate} from "react-router";
import {Link} from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeKey = location.pathname.split('/')[1] || '';

  const menuList: MenuProps['items'] = [
    {
      icon: React.createElement(ProductOutlined),
      key: 'product',
      label: 'Товары',
      onClick: () => navigate('/product')
    },
    {
      icon: React.createElement(UnorderedListOutlined),
      key: 'category',
      label: 'Категории',
      onClick: () => navigate('/category')
    },
    {
      icon: React.createElement(SnippetsOutlined),
      key: 'news',
      label: 'Новости',
      onClick: () => navigate('/news')
    },
  ];

  return (
      <div style={{width: 300, borderRight: '1px solid rgba(5, 5, 5, 0.06)'}}>
        <h2 style={{textAlign: 'center'}}>
          <Link to="/" style={{textDecoration: 'none', color: '#444'}}>Trodat</Link>
        </h2>
        <Menu
          mode="inline"
          selectedKeys={[activeKey]}
          style={{ height: '100%', borderRight: 'none' }}
          items={menuList}
        />
      </div>
  );
};

export default Sidebar;