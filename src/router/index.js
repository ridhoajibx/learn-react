import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'

export default function Router() {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>

            <Route path='/about'>
                <About />
            </Route>

            <Route path='/contact' component={Contact} />
        </Switch>
    )
}
