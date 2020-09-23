import React from 'react'
import { useRecoilState } from 'recoil'
import { theme } from '../store/Index'

export default function Home() {
    const [currentTheme, setCurrentTheme] = useRecoilState(theme);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div class="form-group">
                        <label>Select Theme</label>
                        <select value={currentTheme} onChange={(e) => setCurrentTheme(e.target.value)} className="form-control">
                            <option value='dark'>Dark</option>
                            <option value='white'>White</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    You are selecting the {currentTheme} theme.
                </div>
            </div>
        </div>
    )
}
