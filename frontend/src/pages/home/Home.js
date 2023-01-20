import React, { useEffect } from 'react'
// import { useLocation, useNavigate } from 'react-router'
import Banner from '../home/Banner'
import Contact from '../home/Contact'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
    // const location = useLocation()
    // const navigate = useNavigate()

    useEffect(() => {
       document.title = "Accueil" // Set the title of the page
    }, [])

    return (
        <>
            <motion.div className='wrapper-container' initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}} >
                <Banner />
                <div className='container'>
                    <div className='gutter'>
                        <div className='grid-2 pad-t-xl pad-b-xl'>
                            <div className='grid-item'>
                                <div className='card-wrapper marg-b-xl'>
                                    <div className='card-display'>
                                        <img src={require('../../images/burgercamere.jpg')} alt='Burger de ouf' />
                                    </div>
                                    <div className='card-display-filter'></div>
                                </div>
                            </div>
                            <div className='grid-item'>
                                <div className='flex-col-start'>
                                    <div className='flex-col mid-container'>
                                        <h2 className='large-text bold-text violet-text pad-b-m'>Que proposons-nous ?</h2>
                                        <p className='medium-text regular-text black-text pad-b-l'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae dapibus nibh. Fusce blandit lorem quis mattis ullamcorper. Vivamus maximus convallis aliquet. Pellentesque non aliquam dolor, nec efficitur velit. Vestibulum ac hendrerit sapien, vulputate ultricies nibh. Curabitur ut nisi euismod, tristique leo sit amet, convallis justo.</p>
                                        <Link className='btn btn-bordered btn-medium btn-swift' to='/menu'>Consulter le menu</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid-2-r pad-t-xl pad-b-xl'>
                            <div className='grid-item'>
                                <div className='flex-col-end'>
                                    <div className='flex-col mid-container'>
                                        <h2 className='large-text bold-text sand-text pad-b-m'>Qui sommes-nous ?</h2>
                                        <p className='medium-text regular-text black-text pad-b-l'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae dapibus nibh. Fusce blandit lorem quis mattis ullamcorper. Vivamus maximus convallis aliquet. Pellentesque non aliquam dolor, nec efficitur velit. Vestibulum ac hendrerit sapien, vulputate ultricies nibh. Curabitur ut nisi euismod, tristique leo sit amet, convallis justo.</p>
                                        <a className='btn btn-bordered btn-medium btn-cream' href='#contact'>Contacter-nous</a>
                                    </div>
                                </div>
                            </div>
                            <div className='grid-item'>
                                <div className='card-wrapper marg-b-xl'>
                                    <div className='card-display'>
                                        <img src={require('../../images/auth_page.jpg')} alt='Burger de ouf' />
                                    </div>
                                    <div className='card-display-filter'></div>
                                </div>
                            </div>
                        </div>
                        <div className='grid-2 pad-t-xl pad-b-xl'>
                            <div className='grid-item'>
                                <div className='card-wrapper marg-b-xl'>
                                    <div className='card-display'>
                                        <img src={require('../../images/presentation.jpg')} alt='Burger de ouf' />
                                    </div>
                                    <div className='card-display-filter'></div>
                                </div>
                            </div>
                            <div className='grid-item'>
                                <div className='flex-col-start'>
                                    <div className='flex-col mid-container'>
                                        <h2 className='large-text bold-text red-text pad-b-m'>Où nous trouver ?</h2>
                                        <p className='medium-text regular-text black-text pad-b-l'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae dapibus nibh. Fusce blandit lorem quis mattis ullamcorper. Vivamus maximus convallis aliquet. Pellentesque non aliquam dolor, nec efficitur velit. Vestibulum ac hendrerit sapien, vulputate ultricies nibh. Curabitur ut nisi euismod, tristique leo sit amet, convallis justo.</p>
                                        <Link className='btn btn-bordered btn-medium btn-danger' to='/commande'>Passer commande</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='separator'></div>
                <Contact />
            </motion.div>
        </>
    )
}

export default Home