import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
import Login from '../views/auth/Login'
import UsersIndex from '../views/users/Index'
import UserShow from '../views/users/Show'
import NotFound from '../views/errors/NotFound'
import Navbar from '../components/Navbar'


export default function Router() {
    return (
        <Switch>
            <Route exact path='/'>
                <Navbar>
                    <Home />
                </Navbar>
            </Route>

            <Route path='/about'>
                <Navbar>
                    <About />
                </Navbar>
            </Route>

            <Route path='/contact'>
                <Navbar>
                    <Contact />
                </Navbar>
            </Route>

            <Route exact path='/users'>
                <Navbar>
                    <UsersIndex />
                </Navbar>
            </Route>

            <Route path='/users/:identifier'>
                <Navbar>
                    <UserShow />
                </Navbar>
            </Route>

            <Route path='/login'>
                <Login />    
            </Route>

            <Route path='*' component={NotFound} />
        </Switch>
    )
}
