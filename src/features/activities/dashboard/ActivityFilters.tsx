import React from 'react';
import Calendar from 'react-calendar';
import { Header, Menu } from 'semantic-ui-react';

export default function ActivityFilters() {
    return (
        <>
            <Menu vertical size='large' style={{ width: '100%', marginTop: 25 }}>
                <Header icon='filter' attached color='teal' content='Filtreler' />
                <Menu.Item content='Tüm Aktiviteler' />
                <Menu.Item content="Benim katıldıklarım" />
                <Menu.Item content="Benim düzenlediklerim" />
            </Menu>
            <Header />
            <Calendar />
        </>
    )
}