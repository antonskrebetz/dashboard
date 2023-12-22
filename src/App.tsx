import React from 'react';
import { observer } from "mobx-react-lite"

import activeTabStore from './store/store';
import { menuItems } from './helpers/constants';

import { Layout, Menu, MenuProps } from 'antd';
import { MainContentRender } from './components/MainContentRender';

const App: React.FC = observer(() => {
  const { Header, Content, Sider } = Layout;

  const onMenuItemClick: MenuProps['onClick'] = (e) => {
    activeTabStore.onClickItemMenu(e.key);
  }

  return (
    <Layout>
      <Sider
        breakpoint="md"
        collapsedWidth="0"
        zeroWidthTriggerStyle={{top: '12px'}}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['users']}
          items={menuItems}
          onClick={onMenuItemClick}
        />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff' }}>
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>
            {activeTabStore.activeTab.toLocaleUpperCase()}
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <MainContentRender />
        </Content>
      </Layout>
    </Layout>
  );
});

export default App;
