import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './UsersTable.css'

import * as ReactBootstrap from 'react-bootstrap'


function UsersTable() {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            let result = res.data
            // console.log(result);
            if (result) {
                let final = result.map((user) => {
                    let obj = {}
                    obj['name'] = user.name
                    obj['username'] = user.username
                    obj['email'] = user.email
                    return obj
                })
                setUserList(final)
            }
        })
    }, [])

    const renderUsers = (userList, index) => {
        return (
            <tr key={index}>
                <td>{userList.name}</td>
                <td>{userList.username}</td>
                <td>{userList.email}</td>
            </tr>
        )
    }

    return (
        <div className='table-container'>
            <div className="table-header">
                <h4 className='table-title'>Users</h4>
                <ReactBootstrap.Button variant="outline-primary">New</ReactBootstrap.Button>
            </div>

            <ReactBootstrap.Table size='sm' striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map(renderUsers)}
                </tbody>
            </ReactBootstrap.Table>
        </div>
    )
}

export default UsersTable