import React from 'react'
import './Home.css'
import * as ReactBootstrap from 'react-bootstrap'

import UsersTable from './UsersTable'
import UserForm from './UserForm'

function Home() {
    return (
        <div className='home-container'>
            <div className="home-header">
                <div className='home-title'>
                    <h4>Home Screen</h4>
                </div>
                <div className="dropdown-language">
                    <ReactBootstrap.Dropdown>
                        <ReactBootstrap.Dropdown.Toggle variant="info">
                            Language
                    </ReactBootstrap.Dropdown.Toggle>
                        <ReactBootstrap.Dropdown.Menu>
                            <ReactBootstrap.Dropdown.Item href="/english">English</ReactBootstrap.Dropdown.Item>
                            <ReactBootstrap.Dropdown.Item href="/turkish">Turkish</ReactBootstrap.Dropdown.Item>
                        </ReactBootstrap.Dropdown.Menu>
                    </ReactBootstrap.Dropdown>
                </div>
            </div>
            <div className="links">
                <div className='home-link'>
                    <a href='/home'>Home</a>
                </div>
                <div className='users-link'>
                    <a href='/users'>Users</a>
                </div>
            </div>
            <UsersTable />
            <UserForm />
        </div>
    )
}

export default Home
