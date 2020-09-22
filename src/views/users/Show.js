import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Show() {
    const [user, setUser] = useState([]);
    let { identifier } = useParams()

    // Eslint unaccepted
    const getUser = async () => {
        try {
            let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`);
            setUser(response.data);
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getUser()
    }, [identifier])

    // Eslint accepted
    // useEffect(() => {
    //     const getUser = async () => {
    //         try {
    //             let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`);
    //             setUser(response.data);
    //         } catch (e) {
    //             console.log(e.message);
    //         }
    //     }
    //     getUser()
    // }, [identifier])

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">{user.name}</div>
                <div className="card-body">
                    <div>{user.username}</div>
                    <div>{user.email}</div>
                    <div>{user.phone}</div>
                    <div>{user.website}</div>
                </div>
            </div>
        </div>
    )
}

export default Show

