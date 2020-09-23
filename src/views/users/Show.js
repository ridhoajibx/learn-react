import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Show() {
    const [user, setUser] = useState([]);
    let { identifier } = useParams()

    const [loading, setloading] = useState(false);

    // Eslint unaccepted
    const getUser = async () => {
        setloading(true)
        try {
            let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`);
            setUser(response.data);
            setloading(false)
        } catch (e) {
            setloading(true)
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
            {
                loading ?
                    <div>Loading ...</div> :
                    <div className="card text-dark">
                        <div className="card-header">{user.name}</div>
                        <div className="card-body">
                            <div>{user.username}</div>
                            <div>{user.email}</div>
                            <div>{user.phone}</div>
                            <div>{user.website}</div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Show

