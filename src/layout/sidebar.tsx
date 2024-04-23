import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { IconWrapper } from '../components/icons';
import { useNavigate, Routes, Route } from 'react-router-dom'

const SideBar = () => {
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
    getItem('Dashboard', '/dashboard', <IconWrapper cat='#icon-users'/>),
    getItem('Project Management', 'proj-management', <IconWrapper cat='#icon-dashboard'/>),
    getItem('Projects', 'sub2'),
  ];
  
  // submenu keys of first level
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const navigate = useNavigate()

  const onClick = (e: any) => {
    navigate(e.key, { replace: true })
  }

  return (
    <Menu
        className='side-bar'
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={onClick}
        style={{ width: 256 }}
        items={items}
      />
  )
}


export default SideBar;