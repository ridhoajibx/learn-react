import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function App() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [identifier, setIdentifier] = useState(1)

    const getUsers = async () => {
        setLoading(true)
        try {
            setLoading(false)
            let response = await Axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`)
            setUsers(response.data)
        } catch (error) {
            setLoading(true)
            console.log(error.message);
        }
    }

    useEffect(() => {
        getUsers();
    }, [identifier])

    return (
        <div className="py-4">
            <div className="container">
                <div className="row">
                    <input type="text" name="identifier" value={ identifier } onChange={ (e) => setIdentifier(e.target.value) } className="form-control"/>
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
                                        <tr>
                                            <td>{users.name}</td>
                                            <td>{users.username}</td>
                                            <td>{users.email}</td>
                                            <td>{users.phone}</td>
                                            <td>{users.website}</td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                    }
                </div>
            </div>
        </div>
    )
}