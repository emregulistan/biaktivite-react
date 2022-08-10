import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src='/assets/logo.png' alt='logo' style={{ marginRight: '10px' }} />
                    BiAktivite
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='Aktiviteler' />
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity' positive content='Aktivite Oluştur' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}