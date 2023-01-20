import React from 'react'
// import { useNavigate, useLocation } from 'react-router'
// import axiosProvider from '../../core/axios'

const Logout = () => {
    // const navigate = useNavigate()
    // const location = useLocation()

    // useEffect(() => {
    //     const response = axiosProvider.post('user/logout/blacklist/', {
    //         refresh_token: localStorage.getItem('refresh_token'),
    //     },{
    //         xsrfHeaderName: 'X-CSRFTOKEN',
    //         xsrfCookieName: 'csrftoken',
    //     });
    //     localStorage.removeItem('access_token');
    //     localStorage.removeItem('refresh_token');
    //     axiosProvider.defaults.headers['Authorization'] = null;
    //     navigate('/', {state:{prevUrl: location.pathname}})
    // })

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