import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router'
// import axiosProvider from '../../core/axios'

const Logout = () => {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        localStorage.removeItem('user');
        navigate('/', {state:{prevUrl: location.pathname}})
    })

    return (
        <>
            <div className='container-log'>
                <div className='container-full-width flex-col-center full-height'>
                    <div className='log-wrapper'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logout