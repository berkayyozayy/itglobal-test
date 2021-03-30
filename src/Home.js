import React, { useState } from 'react'
import './Home.css'
import * as ReactBootstrap from 'react-bootstrap'

import UsersTable from './UsersTable'

function Home() {

    const [show, setShow] = useState(false)

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
            {show ? <UsersTable /> : null}
            <a className="users-btn" onClick={() => setShow(!show)}>Users</a>

        </div>
    )
}

export default Home
