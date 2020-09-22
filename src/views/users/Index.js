import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Index() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            let response = await axios.get('https://jsonplaceholder.typicode.com/users');
            
            setUsers(response.data)
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    users.map((user, index) => {
                        return (
                            <div key={index} className="col-md-4">
                                <div className="card mb-4">
                                    <div className="card-header">{user.name}</div>
                                    <div className="card-body">
                                        <div className="mb-4">
                                            <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
                                        </div>

                                        <NavLink to={`users/${user.id}`} className="btn btn-primary">View propfile</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Index