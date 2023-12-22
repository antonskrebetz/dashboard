import React from 'react';
import { CarOutlined, UserOutlined, MobileOutlined } from '@ant-design/icons';

export const menuItems = [
    {
      key: 'users',
      icon: React.createElement(UserOutlined),
      label: 'USERS'
    },
    {
      key: 'cars',
      icon: React.createElement(CarOutlined),
      label: 'CARS'
    },
    {
      key: 'mobiles',
      icon: React.createElement(MobileOutlined),
      label: 'MOBILE DEVICES'
    }
];

export const activeTabMap = {
    USERS: 'users',
    CARS: 'cars',
    MOBILES: 'mobiles'
};
