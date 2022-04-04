import React from 'react';
import { WebSocket } from './WebSocket';
import PageHeader from '../../ui/PageHeader';

export const WebSocketPage = () => {
    return (
        <>
            <PageHeader title="WebSocket" />
            <WebSocket />
        </>

    );
}