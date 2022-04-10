import React from 'react';
import { GitlabCreateUser } from './GitlabCreateUser';
import PageHeader from '../../ui/PageHeader';

export const GitlabCreateUserPage = () => {
    return (
        <>
            <PageHeader title="Gitlab ユーザ作成" />
            <GitlabCreateUser />
        </>
    );
}