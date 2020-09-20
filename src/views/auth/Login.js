import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-6">
                    <div className="text-center mb-4">
                        Back to <NavLink to="/">Home</NavLink>
                    </div>
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form>
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>

                                <button className="btn btn-block btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>               
        </div>
    )
}
