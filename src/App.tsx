import React from 'react';
import { Content } from 'antd/es/layout/layout';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { Button, Layout } from 'antd';
import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Page1 } from '@/components/page/Page1/Page1';
import WebSocketPage from '@/components/page/websocket';
import SideBarList from './components/ui/SideBarList';
import AddressPage from './components/page/address';
import LeaderLinePage from './components/page/leaderline';
import GitlabCreateUserPage from './components/page/gitlab-create-user';

const RoutingContent: React.FC = () => {
  return (
    <Content className="site-layout-background" style={{ padding: 0, margin: 0 }}>
      <Container fluid>
        <Row>
          <Col xs={3}>
            <SideBarList />
          </Col>
          <Col xs={9}>
            <Row>
              <Switch>
                <Route path={'/address'} component={AddressPage} exact={true} />
                <Route path={'/websocket'} component={WebSocketPage} exact={true} />
                <Route path={'/leaderline'} component={LeaderLinePage} exact={true} />
                <Route path={'/gitlab-create-user'} component={GitlabCreateUserPage} exact={true} />
                <Route path="*">
                  <Redirect to={'page1'} />
                </Route>
              </Switch>
            </Row>
          </Col>
        </Row>
      </Container>
    </Content>
  );
};

export const App: React.FC = () => (
  <Layout>
    <Router>
      <RoutingContent />
    </Router>
  </Layout>
);
