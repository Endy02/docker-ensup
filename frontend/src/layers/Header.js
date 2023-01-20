import React, {useEffect, useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
// import axiosProvider from '../core/axios';


const Header = () => {
  // const navigate = useNavigate()
  // const location = useLocation()
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({})
  // const [errMsg, setErrMsg] = useState("")


  useEffect(() => {
      setUser(localStorage.getItem('user'))
  }, [])

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <= 960){
          setButton(false)
      } else {
          setButton(true)
      }
  };

  window.addEventListener('resize', showButton)

  return (
      <>
          <header className={click ? "navbar nav-bg-orange" : "navbar"}>
              <Link to='/' className="nav-logo" onClick={closeMobileMenu}>
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
              </Link>
              <div className="nav-content">
                  <div className={click ? "nav-list active" : "nav-list"}>
                      <ul className='nav-item-list'>
                          <li className="nav-item">
                              <NavLink to='/' activeclassname="active" className="nav-link" onClick={closeMobileMenu}>
                                  <div className='nav-link-icon'>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"/>
                                      </svg>
                                  </div>
                                  <p className='medium-text bold-text'>Accueil</p>
                              </NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink to='/menu' activeclassname="active" className="nav-link" onClick={closeMobileMenu}>
                                  <div className='nav-link-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                      <path d="M176 32c44.2 0 80 35.8 80 80v16c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80V48c0-8.8 7.2-16 16-16zM56 64h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24zM24 136H136c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 96c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24zM272 48c0-8.8 7.2-16 16-16c44.2 0 80 35.8 80 80v16c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80V48zM400 32c44.2 0 80 35.8 80 80v16c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80V48c0-8.8 7.2-16 16-16zm80 160v16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16V256c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16zM352 176c8.8 0 16 7.2 16 16v16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16V256c0-44.2 35.8-80 80-80zm-96 16v16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16V256c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16zM3.5 347.6C1.6 332.9 13 320 27.8 320H484.2c14.8 0 26.2 12.9 24.4 27.6C502.3 397.8 464.2 437 416 446v2c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32v-2c-48.2-9-86.3-48.2-92.5-98.4z"/>
                                    </svg>
                                  </div>
                                  <p className='medium-text bold-text'>Menu</p>
                              </NavLink>
                          </li>
                          {/* {localStorage.getItem('user') ? ( */}
                              <li className="nav-item">
                                  <NavLink to='/commande' activeclassname="active" className="nav-link" onClick={closeMobileMenu}>
                                      <div className='nav-link-icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                          <path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zm240 16c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16zM272 96c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z"/>
                                        </svg>
                                      </div>
                                      <p className='medium-text bold-text'>Commander</p>
                                  </NavLink>
                              </li>
                           {/* ) : null} */}
                      </ul>
                      <div className='nav-content-footer'>
                          <div className='nav-content-footer-tools'>
                              <Link to='/' onClick={closeMobileMenu}>
                                  <svg xmlns="http://www.w3.org/2000/svg" className='icon-img' viewBox="0 0 512 512">
                                      <path className='icon-logout' d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"/>
                                  </svg>
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='nav-extra'>
                {/* {user == true && user.gerant ? ( */}
                    <Link to='/dashboard' className='icon-link icon-link-small icon-link-great pad-r-l'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM288 96c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM96 288c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zm352-32c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"/>
                        </svg>
                    </Link>
                {/* ): null} */}
                {user ? (
                        <>
                            <Link to='/login' className='icon-link icon-link-small icon-link-great'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0S112 64.5 112 144s64.5 144 144 144zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7H481.3c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320H161.3z"/>
                                </svg>
                            </Link>
                        </>
                ) : (
                    <Link to='/login' className='btn btn-medium btn-bordered btn-current'>login</Link>
                )}
               </div>
              <div className="nav-icon" onClick={handleClick}>
                  {click ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>}
              </div>
          </header>
      </>
  )
}

export default Header