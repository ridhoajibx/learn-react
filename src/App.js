import React from 'react'
import { useRecoilState } from 'recoil';
import Router from './router'
import { theme } from './store/Index';

export default function App() {
    const [currentTheme] = useRecoilState(theme);
    const defaultTheme = currentTheme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark';
    
    return (
        <div className={`${defaultTheme} w-100`}>
            <Router />
        </div>
    )
}
