import React from 'react';
import { LeaderLine } from './LeaderLine';
import PageHeader from '../../ui/PageHeader';

export const LeaderLinePage = () => {
    return (
        <>
            <PageHeader title="LeaderLine" />
            <LeaderLine />
        </>
    );
}