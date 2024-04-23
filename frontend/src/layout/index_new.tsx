import React from 'react';
import {
  Outlet,
} from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme, ConfigProvider } from 'antd';

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: 1,
    label: `Dashboard`,
  },
  {
    key: 2,
    label: `Gallery`,
  },
  {
    key: 3,
    label: `Setting`,
  }
]

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider
  theme={{
    components: {
      Layout: {
        footerPadding: '18px 24px'
      },
      Menu: {
        darkItemBg: '#1abc9c',
        darkItemSelectedBg: '#27ae60',
        darkItemSelectedColor: '#27ae60',
        horizontalItemSelectedColor: '#27ae60'
      }
    },
  }}
>
<Layout>
      <Header style={{ display: 'flex', alignItems: 'center', background: '#1abc9c' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px', marginTop: '24px' }}>
        <div
          style={{
            background: colorBgContainer,
            height: `calc(100vh - 120px)`,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        IS5451 project assignment ©{new Date().getFullYear()} Created by Group 8
      </Footer>
    </Layout>
</ConfigProvider>

  );
};

export default App;