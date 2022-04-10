import React from 'react';
import './GitlabCreateUser.css';
import { TextareaAutosize, TextField } from '@mui/material';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const GitlabCreateUser: React.FC = () => {

    const onCsvButtonClickHandler = () => {
    };

    const onConfirmButtonClickHandler = () => {

    };

    return (
        <div className="WerSocket">
            <Container>
                <Row className="text-center">
                    <Col>
                        <div>ユーザ情報を列挙したCSVファイルを選択</div>
                        <Button onClick={onCsvButtonClickHandler}>CSV読み込み</Button>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <div>▼</div><div>▼</div><div>▼</div>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <TextareaAutosize style={{ width: 500 }} minRows={5} readOnly />
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <div>▼</div><div>▼</div><div>▼</div>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <div>＊件のユーザを追加します</div>
                        <Button onClick={onConfirmButtonClickHandler}>確定</Button>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};
