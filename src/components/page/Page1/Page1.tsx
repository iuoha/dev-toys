import React from 'react';
import { Button } from 'antd';
import './Page1.css';
import { useHistory } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';

export const Page1: React.FC = () => {

  const history = useHistory();

  const onClickHandler = () => history.push('/page2');

  return (
    <div className="Page1">
      <Container>
        <Row>
          <Col>
            <h1>page1</h1>
          </Col>
          <Col>
            <Button type="primary" onClick={onClickHandler}>goto Page2</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
