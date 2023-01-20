import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './core/AnimatedRoutes'
import './css/main.css'


const App = () => {

    // const [token, setToken] = useState('')

    // const handleToken = (token) => {
    //     setToken(token)
    // }

    return (
        <>
            <Router>
                <AnimatedRoutes />
            </Router>
        </>
    )
}

export default App;