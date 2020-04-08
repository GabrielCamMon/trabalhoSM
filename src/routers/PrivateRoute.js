import React, { useState } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  keyNum,
  title,
  ...rest
}) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? (
          <Layout style={{ minHeight: "100vh" }}>
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={collapsed => setCollapsed(collapsed)}
            >
              <div className="logo" />
              <Menu
                theme="dark"
                defaultSelectedKeys={[`${keyNum}`]}
                mode="inline"
              >
                <Menu.Item key="1">
                  <Icon
                    type="pie-chart"
                    style={{ fontSize: "21px", color: "#FFF" }}
                  />
                  <span>Dashboard</span>
                  <NavLink to="/" />
                </Menu.Item>

                <Menu.Item key="2">
                  <Icon
                    type="user"
                    style={{ fontSize: "21px", color: "#FFF" }}
                  />
                  <span>Usuário</span>
                  <NavLink to="/user" />
                </Menu.Item>

                <SubMenu
                  key="3"
                  title={
                    <span>
                      <Icon type="wallet" />
                      <span>Contas</span>
                    </span>
                  }
                >
                  <Menu.Item key="32">
                    <span>Carteira</span>
                    <NavLink to="/accountsWallet" />
                  </Menu.Item>
                  <Menu.Item key="31">
                    <span>Conta Banco</span>
                    <NavLink to="/accountsBank" />
                  </Menu.Item>
                </SubMenu>

                <Menu.Item key="4">
                  <Icon
                    type="medium"
                    style={{ fontSize: "21px", color: "#FFF" }}
                  />
                  <span>Moeda</span>
                  <NavLink to="/currency" />
                </Menu.Item>

                <Menu.Item key="5">
                  <Icon
                    type="shop"
                    style={{ fontSize: "21px", color: "#FFF" }}
                  />
                  <span>Ordem</span>
                  <NavLink to="/order" />
                </Menu.Item>

                <Menu.Item key="6">
                  <Icon
                    type="dollar"
                    style={{ fontSize: "20px", color: "#FFF" }}
                  />
                  <span>Pagamentos</span>
                  <NavLink to="/payment" />
                </Menu.Item>
                <Menu.Item key="7">
                  <Icon
                    type="swap"
                    style={{ fontSize: "20px", color: "#FFF" }}
                  />
                  <span>Transaction</span>
                  <NavLink to="/transaction" />
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: "#fff", padding: 0 }} />
              <Content style={{ margin: "0 16px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>{title}</Breadcrumb.Item>
                </Breadcrumb>
                <Component {...props} />
                {/**<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>*/}
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Whale Client © 2020
              </Footer>
            </Layout>
          </Layout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: true
});
export default connect(mapStateToProps)(PrivateRoute);
