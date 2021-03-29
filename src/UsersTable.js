import React, { useState, useEffect } from 'react'
import UserForm from './UserForm'
import { URL } from './Constants'
import axios from 'axios'
import './UsersTable.css'

import * as ReactBootstrap from 'react-bootstrap'


function UsersTable() {
    const [userList, setUserList] = useState([])
    const [isFormOpen, setIsFormOpen] = useState(false)

    useEffect(() => {
        axios.get(URL).then((res) => {
            let result = res.data
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

    const openForm = () => {
        setIsFormOpen(!isFormOpen)
    }

    const addNewEntry = (formData) => {
        console.log(formData);
        console.log(userList)
        setUserList([...userList, formData])
    }

    return (
        <div className='table-container'>
            <div className="table-header">
                <h4 className='table-title'>Users</h4>
                <ReactBootstrap.Button variant="outline-primary" onClick={openForm} >New</ReactBootstrap.Button>
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
            {isFormOpen && <UserForm addNewEntry={addNewEntry} />}

        </div>
    )
}

export default UsersTable
