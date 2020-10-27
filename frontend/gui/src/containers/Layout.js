import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom'


const { Header, Content, Footer } = Layout;
const CustomLayout = (props) =>{
    return (
        <Layout>

          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

              {
                props.isAuthenticated ? 
                <Menu.Item key="2">
                      LogOut
                </Menu.Item>

                :

                <Menu.Item key="1">
                  <Link to="/login">Login</Link>
                </Menu.Item>
              }
              
              <Menu.Item key="1">
                <Link to="/">Posts</Link>
              </Menu.Item>

            </Menu>

          </Header>

          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>

            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><Link to="/"><strong>Home</strong></Link></Breadcrumb.Item>
            </Breadcrumb>

            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
              {props.children}
            </div>

          </Content>

          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default CustomLayout