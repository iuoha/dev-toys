import React from 'react';
import { Divider, Typography } from '@mui/material';
import './PageHeader.css';

interface IPageHeader {
    title: string;
}

export const PageHeader = ({ title }: IPageHeader) => {
    return (
        <div className="PageHeader">
            <Typography sx={{ paddingLeft: "10px", color: "gray" }} gutterBottom variant="h6" component="div">
                {title}
            </Typography>
            <Divider />
        </div>
    );
}