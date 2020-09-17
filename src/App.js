import React from 'react'
import Router from './router'

import Navbar from './components/Navbar'

export default function App() {
    return (
        <div>
            <Navbar />
            <div className="py-4">
                <Router />
            </div>
        </div>
    )
}
