import React, { useRef, useEffect, useState } from 'react'
import BannerMenu from './BannerMenu'
import { motion } from 'framer-motion'
import axiosProvider from '../../core/axios';

const MENU_URL = 'products';

const Menu = () => {
  const [click, setClick] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [products, setProducts] = useState([])

  const handleClick = () =>{
    setClick(!click);
  }

  useEffect(() => {
    document.title = "Menu" // Set the title of the page
    try {
      async function fetchApi(){
        const response = await axiosProvider.get(MENU_URL)
        console.log(response)
        setProducts(response.data)
      }
      fetchApi()
      
  } catch (err) {
      if (!err?.response) {
          setErrMsg('No Server Response')
      } else if (err.response?.status === 500) {
          setErrMsg('Missing username or Password');
      } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized')
      } else {
          setErrMsg('Login Failed')
      }
  }
  }, [errMsg])

  const ProdcutModal = ({ name, price }) => {
    return(
      <>
        <div className='basic-modal-wrapper'>
          <motion.div className='basic-modal-filter' initial={{opacity: 0}} animate={{opacity:.85}}></motion.div>
          <motion.div className='basic-modal' initial={{opacity: 0}} animate={{opacity:1}} onClick={handleClick}>
            <div className='basic-modal-unit'>
              <p className='large-text bold-text white-text'>{price} €</p>
            </div>
            <div className='basic-modal-content'>
              <div className='gutter'>
                <div className='grid-2-2'>
                  <div className='grid-item'>
                    <img className='img-small img-bordered' src={require('../../images/burgercamere.jpg')} alt='burger camere' />
                  </div>
                  <div className='grid-item'>
                    <div className='flex-col'>
                      <h3 className='medium-text bold-text black-text pad-b-m'>{name}</h3>
                      <p className='medium-text regular-text black-text'>Ce burger est fait pour les amoureux de la viande et du hamburger maison, avec ses oignons et son bacon grillé, il vous fera salivé grâce a ses cornichons et ça sauce maison.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='container'>
        <BannerMenu />
      </div>
      <div className='container'>
        <div className='flex-col'>
          <div className='full-gutter'>
            <div className='grid-2-2'>
              <div className='grid-item-t'>
                <div className='nav-card'>
                  <ul className='nav-card-list'>
                    <li className='nav-card-item-active'><p className='medium-text bold-text'>Burgers</p></li>
                    <li className='nav-card-item'><p className='medium-text bold-text'>Salade</p></li>
                    <li className='nav-card-item'><p className='medium-text bold-text'>Formule</p></li>
                    <li className='nav-card-item'><p className='medium-text bold-text'>Plats</p></li>
                    <li className='nav-card-item'><p className='medium-text bold-text'>Boissons</p></li>
                    <li className='nav-card-item'><p className='medium-text bold-text'>Dessert</p></li>
                  </ul>
                </div>
              </div>
              <div className='grid-item-t'>
                <div className='flex-col-center full-width'>
                  <div className='grid-4'>
                    {/* TODO : Map All Burgers  */}
                    {products.map((product) => {
                      {click === true ? <ProdcutModal name={product.name} price={product.price} /> : null}
                      return(
                        <div className='grid-item'>
                          <div className='d-card'>
                            <div className='d-card-header' onClick={e => {handleClick(e, product.name)}}>
                                <img className='img-cover' src={require('../../images/burgercamere.jpg')} alt="Image1" />
                            </div>
                            <div className='d-card-content'>
                              <p className='medium-text bold-text black-text pad-b-s'>{product.name}</p>
                              <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                              <p className='medium-text bold-text black-text pad-b-s'>{product.price} €</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className='separator'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu