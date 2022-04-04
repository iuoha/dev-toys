import React from 'react';
import { Button } from 'antd';
import './WebSocket.css';
import { useHistory } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';

export const WebSocket: React.FC = () => {

  const history = useHistory();

  const onClickHandler = () => history.push('/page2');

  return (
    <div className="WebSocket">
      <Container>
        <Row>
          <Col>
            <h1>WebSocket</h1>
          </Col>
          <Col>
            <Button type="primary" onClick={onClickHandler}>goto Page2</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
