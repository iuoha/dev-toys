import React from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import './SideBarListItem.css';

interface ISideBarListItem {
    title: string;
    icon: React.ReactElement;
    index: number;
    selectedIndex: number;
    onClickHandler: () => void;
}

export const SideBarListItem = ({ title, icon, index, selectedIndex, onClickHandler }: ISideBarListItem) => {
    return (
        <div className="SideBarListItem">
            <ListItem>
                <ListItemButton selected={selectedIndex === index} onClick={onClickHandler} >
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={title} />
                </ListItemButton>
            </ListItem>
        </div>
    );
}