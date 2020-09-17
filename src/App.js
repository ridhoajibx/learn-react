import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function App() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const getUsers = async () => {
        setLoading(true)
        try {
            setLoading(false)
            let response = await Axios.get(`https://jsonplaceholder.typicode.com/users`)
            setUsers(response.data)
        } catch (error) {
            setLoading(true)
            console.log(error.message);
        }
    }

    useEffect(() => {
        getUsers();
    })

    return (
        <div className="py-4">
            <div className="container">
                <div className="row">
                    {
                        loading ? <div>Loading ...</div> :
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, index) => (
                                            <tr key={index}>
                                                <td>{user.name}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.website}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                    }
                </div>
            </div>
        </div>
    )
}