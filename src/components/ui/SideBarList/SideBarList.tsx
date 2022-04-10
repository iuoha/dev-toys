import React from 'react';
import { useHistory } from 'react-router';
import { List } from '@mui/material';
import SideBarListItem from '../SideBarListItem';
import { LocalPostOffice, Power, Brush } from '@mui/icons-material';
import './SideBarList.css';

export const SideBarList = () => {
    const [selectedItem, setSelectedItem] = React.useState(0);

    const history = useHistory();
    const onClickHandler = (index: number, link: string) => {
        setSelectedItem(index);
        history.push(link);
    };

    return (
        <div className="SideBarList">
            <List>
                <SideBarListItem title='Address' icon={<LocalPostOffice />} onClickHandler={() => onClickHandler(0, '/address')} index={0} selectedIndex={selectedItem} />
                <SideBarListItem title='WebSocket' icon={<Power />} onClickHandler={() => onClickHandler(1, '/WebSocket')} index={1} selectedIndex={selectedItem} />
                <SideBarListItem title='LeaderLine' icon={<Brush />} onClickHandler={() => onClickHandler(2, '/leaderline')} index={2} selectedIndex={selectedItem} />
                <SideBarListItem title='Gitlab ユーザ作成' icon={<Brush />} onClickHandler={() => onClickHandler(2, '/gitlab-create-user')} index={3} selectedIndex={selectedItem} />
            </List>
        </div>
    );
}