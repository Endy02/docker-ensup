import React, { useRef, useState, useEffect } from 'react'
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import axiosProvider from '../../core/axios';

const LOGIN_URL = 'user/login';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate()
    const location = useLocation()

    const [mail, setMail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSucces] = useState(false);

    useEffect(() => {
        setErrMsg('')
    }, [mail, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosProvider.post(LOGIN_URL,
                JSON.stringify({
                    username: mail,
                    password: pwd
                }),{
                    xsrfHeaderName: 'X-CSRFTOKEN',
                    xsrfCookieName: 'csrftoken',
                })

            localStorage.setItem("user", {username: response.data.mail})

            setMail('')
            setPwd('')
            setSucces(true);
            navigate('/', {state:{prevUrl: location.pathname}})
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 500) {
                navigate('/register', {state:{prevUrl: location.pathname}})
                setErrMsg('Missing username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Login Failed')
            }
        }
    }

    return (
        <>
            <div className='container-first'>
                <div className='grid-2 grid-2-login'>
                    <div className='grid-item-login d-none'>
                        <img className='img-cover' src={require('../../images/auth_page.jpg')} />   
                    </div>
                    <div className='grid-item-login'>
                        <div className='flex-col-center full-width'>
                            <div className='logo-login'>
                                <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 213.75 189.66">
                                        <g id="Layer_1-2">
                                            <g id="Group_3">
                                                <g id="Subtraction_1">
                                                    <path className="cls-3"
                                                        d="m104.86,189.66c-9.66,0-18.82-.28-27.24-.84-7.89-.52-15.32-1.3-22.09-2.3-5.88-.85-11.71-2.01-17.48-3.46-4.55-1.14-9.03-2.58-13.4-4.29-6.1-2.27-11.75-5.6-16.69-9.84-2.96-2.57-5.28-5.8-6.78-9.42-.72-1.79-1.11-3.69-1.17-5.61-.06-.78.03-1.56.27-2.3h213.31c0,.77-.02,1.52-.05,2.29.07,0,.2.43.2,1.25-.02,1.12-.2,2.23-.53,3.3-.52,1.69-1.29,3.29-2.26,4.76-1.4,2.1-3.09,3.99-5,5.64-2.68,2.3-5.61,4.29-8.73,5.94-8.22,4.42-19.22,7.91-32.7,10.38-8.59,1.53-17.26,2.63-25.96,3.28-10.25.8-21.59,1.22-33.7,1.22Z" />
                                                </g>
                                                <g id="Subtraction_2">
                                                    <path className="cls-3"
                                                        d="m213.31,75.21H.02C.02,48.3,11.32,28.22,33.62,15.52c5.16-2.91,10.58-5.33,16.19-7.25,5.88-2.02,11.9-3.62,18-4.8C80.62,1.07,93.63-.09,106.66,0c13.03-.09,26.04,1.07,38.85,3.47,6.11,1.18,12.12,2.78,18,4.8,5.61,1.92,11.02,4.35,16.19,7.25,22.3,12.7,33.6,32.78,33.6,59.69Z" />
                                                </g>
                                                <g id="MYRESTO" className="cls-1">
                                                    <g className="cls-1">
                                                        <path className="cls-2"
                                                            d="m22.51,88.32l7.6,21.46,7.56-21.46h8.01v29.58h-6.12v-8.09l.61-13.96-7.98,22.05h-4.19l-7.96-22.02.61,13.94v8.09h-6.1v-29.58h7.96Z" />
                                                        <path className="cls-2"
                                                            d="m61.2,101.65l6.16-13.33h6.66l-9.71,18.85v10.73h-6.2v-10.73l-9.71-18.85h6.69l6.12,13.33Z" />
                                                        <path className="cls-2"
                                                            d="m87.67,107.08h-4.86v10.83h-6.1v-29.58h10.99c3.49,0,6.19.78,8.09,2.34s2.84,3.76,2.84,6.6c0,2.02-.44,3.7-1.31,5.05-.87,1.35-2.2,2.42-3.97,3.22l6.4,12.09v.28h-6.54l-5.55-10.83Zm-4.86-4.94h4.92c1.53,0,2.72-.39,3.56-1.17.84-.78,1.26-1.85,1.26-3.22s-.4-2.49-1.19-3.29-2.01-1.2-3.65-1.2h-4.9v8.88Z" />
                                                        <path className="cls-2"
                                                            d="m121.08,105.08h-11.7v7.92h13.73v4.9h-19.83v-29.58h19.79v4.94h-13.69v7.05h11.7v4.77Z" />
                                                        <path className="cls-2"
                                                            d="m142.02,110.14c0-1.15-.41-2.04-1.22-2.65s-2.28-1.27-4.39-1.95c-2.11-.68-3.79-1.36-5.02-2.02-3.36-1.81-5.04-4.26-5.04-7.33,0-1.6.45-3.02,1.35-4.28.9-1.25,2.2-2.23,3.88-2.94,1.69-.7,3.58-1.06,5.68-1.06s4,.38,5.65,1.15c1.65.77,2.94,1.85,3.85,3.24.92,1.4,1.37,2.98,1.37,4.75h-6.1c0-1.35-.43-2.41-1.28-3.16-.85-.75-2.05-1.13-3.6-1.13s-2.65.31-3.47.94-1.24,1.46-1.24,2.49c0,.96.48,1.77,1.45,2.42s2.39,1.26,4.28,1.83c3.47,1.04,5.99,2.34,7.58,3.88,1.58,1.54,2.38,3.47,2.38,5.77,0,2.56-.97,4.57-2.91,6.02-1.94,1.46-4.54,2.18-7.82,2.18-2.28,0-4.35-.42-6.22-1.25s-3.29-1.97-4.28-3.42-1.47-3.13-1.47-5.04h6.12c0,3.26,1.95,4.9,5.85,4.9,1.45,0,2.58-.29,3.39-.88s1.22-1.41,1.22-2.47Z" />
                                                        <path className="cls-2"
                                                            d="m174.53,93.26h-9.06v24.65h-6.1v-24.65h-8.94v-4.94h24.1v4.94Z" />
                                                        <path className="cls-2"
                                                            d="m201.74,103.79c0,2.91-.52,5.47-1.54,7.66s-2.5,3.89-4.42,5.08c-1.92,1.19-4.11,1.79-6.59,1.79s-4.64-.59-6.56-1.77c-1.92-1.18-3.41-2.86-4.47-5.05s-1.59-4.7-1.61-7.55v-1.46c0-2.91.53-5.48,1.58-7.69,1.05-2.21,2.53-3.91,4.45-5.1,1.92-1.19,4.11-1.78,6.57-1.78s4.66.59,6.57,1.78c1.92,1.19,3.4,2.89,4.45,5.1,1.05,2.21,1.58,4.77,1.58,7.67v1.32Zm-6.18-1.34c0-3.1-.56-5.46-1.67-7.07-1.11-1.61-2.7-2.42-4.75-2.42s-3.62.8-4.73,2.39c-1.11,1.59-1.67,3.92-1.69,7v1.44c0,3.02.56,5.36,1.67,7.03,1.11,1.67,2.71,2.5,4.8,2.5s3.62-.8,4.71-2.41c1.1-1.6,1.65-3.94,1.67-7.02v-1.44Z" />
                                                    </g>
                                                </g>
                                                <g id="BAR_RESTAURANT" className="cls-1">
                                                    <g className="cls-1">
                                                        <path className="cls-2"
                                                            d="m38.91,141.68v-9.86h2.91c1.06,0,1.86.22,2.4.65.55.44.82,1.08.82,1.93,0,.51-.14.96-.42,1.33s-.66.65-1.14.81c.57.13,1.04.41,1.38.85.35.44.52.94.52,1.52,0,.87-.28,1.55-.84,2.04-.56.49-1.34.73-2.35.73h-3.3Zm.83-5.44h2.28c.7-.01,1.23-.18,1.62-.49.38-.31.57-.77.57-1.37,0-.63-.2-1.1-.59-1.4s-.99-.45-1.79-.45h-2.08v3.72Zm0,.7v4.03h2.5c.71,0,1.28-.18,1.7-.54.42-.36.63-.87.63-1.51,0-.61-.2-1.09-.6-1.44-.4-.35-.95-.53-1.66-.53h-2.57Z" />
                                                        <path className="cls-2"
                                                            d="m54.41,138.91h-4.48l-1.02,2.77h-.87l3.73-9.86h.79l3.73,9.86h-.87l-1.02-2.77Zm-4.22-.7h3.96l-1.98-5.37-1.98,5.37Z" />
                                                        <path className="cls-2"
                                                            d="m63.12,137.57h-2.86v4.11h-.84v-9.86h3.2c1.05,0,1.87.25,2.47.76.59.51.89,1.22.89,2.14,0,.63-.19,1.19-.56,1.67s-.87.82-1.49,1l2.47,4.2v.09h-.89l-2.38-4.11Zm-2.86-.7h2.55c.7,0,1.26-.2,1.69-.6.42-.4.64-.91.64-1.55,0-.7-.22-1.24-.66-1.62s-1.06-.58-1.86-.58h-2.35v4.34Z" />
                                                        <path className="cls-2"
                                                            d="m78.65,137.57h-2.86v4.11h-.84v-9.86h3.2c1.05,0,1.87.25,2.47.76.59.51.89,1.22.89,2.14,0,.63-.19,1.19-.56,1.67s-.87.82-1.49,1l2.47,4.2v.09h-.89l-2.38-4.11Zm-2.86-.7h2.55c.7,0,1.26-.2,1.69-.6.42-.4.64-.91.64-1.55,0-.7-.22-1.24-.66-1.62s-1.06-.58-1.86-.58h-2.35v4.34Z" />
                                                        <path className="cls-2"
                                                            d="m90.89,136.96h-4.61v4.02h5.3v.7h-6.14v-9.86h6.1v.7h-5.27v3.73h4.61v.7Z" />
                                                        <path className="cls-2"
                                                            d="m100.6,139.26c0-.55-.19-.98-.58-1.3-.38-.32-1.09-.62-2.11-.91-1.02-.29-1.77-.6-2.23-.94-.67-.48-1-1.11-1-1.88s.31-1.37.93-1.84c.62-.47,1.41-.71,2.38-.71.65,0,1.24.13,1.76.38s.92.6,1.2,1.06c.28.45.43.96.43,1.51h-.84c0-.67-.23-1.22-.69-1.63-.46-.41-1.08-.61-1.86-.61s-1.35.17-1.8.5c-.45.34-.67.78-.67,1.32,0,.5.2.91.6,1.23s1.05.6,1.93.84c.89.24,1.56.49,2.01.75s.8.57,1.03.93c.23.36.35.79.35,1.28,0,.78-.31,1.4-.93,1.87-.62.47-1.44.71-2.46.71-.7,0-1.33-.12-1.91-.37-.58-.25-1.02-.6-1.32-1.04s-.45-.96-.45-1.54h.83c0,.7.26,1.24.78,1.65.52.4,1.21.6,2.07.6.77,0,1.38-.17,1.85-.51.46-.34.7-.79.7-1.35Z" />
                                                        <path className="cls-2" d="m111.6,132.53h-3.38v9.16h-.83v-9.16h-3.37v-.7h7.58v.7Z" />
                                                        <path className="cls-2"
                                                            d="m119.66,138.91h-4.48l-1.02,2.77h-.87l3.73-9.86h.79l3.73,9.86h-.87l-1.02-2.77Zm-4.22-.7h3.96l-1.98-5.37-1.98,5.37Z" />
                                                        <path className="cls-2"
                                                            d="m131.36,131.82v6.73c0,.66-.15,1.24-.44,1.73s-.7.87-1.22,1.13c-.53.26-1.13.4-1.81.4-1.04,0-1.87-.28-2.5-.85-.63-.57-.95-1.35-.97-2.35v-6.79h.83v6.67c0,.83.24,1.48.71,1.93.47.46,1.12.69,1.93.69s1.46-.23,1.93-.69c.47-.46.71-1.1.71-1.92v-6.68h.84Z" />
                                                        <path className="cls-2"
                                                            d="m139.04,137.57h-2.87v4.11h-.84v-9.86h3.2c1.05,0,1.87.25,2.46.76s.89,1.22.89,2.14c0,.63-.19,1.19-.56,1.67s-.87.82-1.49,1l2.47,4.2v.09h-.89l-2.38-4.11Zm-2.87-.7h2.55c.7,0,1.26-.2,1.69-.6.42-.4.64-.91.64-1.55,0-.7-.22-1.24-.66-1.62s-1.06-.58-1.86-.58h-2.35v4.34Z" />
                                                        <path className="cls-2"
                                                            d="m151.16,138.91h-4.48l-1.02,2.77h-.87l3.73-9.86h.79l3.73,9.86h-.87l-1.02-2.77Zm-4.22-.7h3.96l-1.98-5.37-1.98,5.37Z" />
                                                        <path className="cls-2"
                                                            d="m163.52,141.68h-.83l-5.67-8.44v8.44h-.84v-9.86h.84l5.68,8.45v-8.45h.83v9.86Z" />
                                                        <path className="cls-2" d="m174.4,132.53h-3.38v9.16h-.83v-9.16h-3.37v-.7h7.58v.7Z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                </svg>
                            </div>
                            <div className='separator'></div>
                            <form className='contact-form pad-b-xl' onSubmit={handleSubmit} >
                                <div className='contact-form-item'>
                                    <input type='text' onChange={(e) => {setMail(e.target.value)}} ref={userRef} className='input input-medium input-text input-border-orange' placeholder='Username' required/>
                                </div>
                                <div className='contact-form-item'>
                                    <input type='password' onChange={(e) => {setPwd(e.target.value)}} ref={userRef} className='input input-medium input-text input-border-orange' placeholder='Mot de passe' required/>
                                </div>
                                <div className='contact-form-item flex-col-center'>
                                    <button type='submit' className='btn btn-bordered btn-large btn-swift'>Connexion</button> 
                                </div>
                            </form>
                            <Link to="/register" className='link link-medium link-cream'> Vous n'avez pas de compte ?</Link>
                            <div className='abs-t-l'>
                                <p className='grey-text bold-text large-text '>Connexion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login