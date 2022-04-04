import React from 'react';
import './Address.css';
import { TextField } from '@mui/material';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AddressGetForm } from '../../model/Address/AddressGetForm/AddressGetForm';

export const Address: React.FC = () => {

  const [zipcode, setZipCode] = React.useState('');

  const onClickHandler = () => {
    let params: AddressGetForm = new AddressGetForm();
    params.zipcode = zipcode;
    // const res = getAddress(params);
    // console.log(res);
  };

  return (
    <div className="WebSocket">
      <Container>
        <Row>
          <Col>
            <TextField label="郵便番号" defaultValue={zipcode} onChange={() => setZipCode(zipcode)} />
          </Col>
          <Col>
            <Button onClick={onClickHandler}>郵便番号検索</Button>
          </Col>
        </Row>
      </Container>
    </div >
  );
};
