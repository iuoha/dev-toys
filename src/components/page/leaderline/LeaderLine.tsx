import React from 'react';
import './LeaderLine.css';
import { TextField } from '@mui/material';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const LeaderLine: React.FC = () => {

    const [zipcode, setZipCode] = React.useState('');

    const onClickHandler = () => {
    };

    return (
        <div className="LeaderLine">
            <Container>
                <Row>
                    <Col>
                        <TextField label="ライン" defaultValue={zipcode} onChange={() => setZipCode(zipcode)} />
                    </Col>
                    <Col>
                        <Button onClick={onClickHandler}>郵便番号検索</Button>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};
