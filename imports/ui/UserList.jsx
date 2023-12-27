// UserList.jsx
import React, { useState, useEffect } from 'react';
import { fetch, Headers, Request, Response } from 'meteor/fetch';
import './UserList.css'

const UserList = () => {
    const [userList, setUserList] = useState([]);

    const fetchUserList = async () => {
        try {
            const response = await fetch("https://dummyjson.com/users");
            if (!response.ok) { 
                // throws an Error message with status text
                throw new Error(response.statusText);
            }
            const data = await response.json(); // parses response to JSON
            setUserList(data.users);
        } catch(error) {
            console.error('Failed to fetch user list:', error);
        }
    };
    
    

    useEffect(() => {
        fetchUserList();
    }, []);

    return (
        <div className="user-list-container">
            <h2>Blood Bank User List</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Blood Group</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{`${user.firstName} ${user.lastName}`}</td>
                            <td>{user.email}</td>
                            <td>{user.bloodGroup}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default UserList;
