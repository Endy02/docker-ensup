import React, { useEffect, useState } from 'react'
import BannerMenu from './BannerMenu'
import { motion } from 'framer-motion'


const Menu = () => {
  const [click, setClick] = useState(false);

  const handleClick = () =>{
    setClick(!click);
  }
  useEffect(() => {
    document.title = "Menu" // Set the title of the page
  }, [])

  const ProdcutModal = () => {
    return(
      <>
        <div className='basic-modal-wrapper'>
          <motion.div className='basic-modal-filter' initial={{opacity: 0}} animate={{opacity:.85}}></motion.div>
          <motion.div className='basic-modal' initial={{opacity: 0}} animate={{opacity:1}} onClick={handleClick}>
            <div className='basic-modal-unit'>
              <p className='large-text bold-text white-text'>9,00 €</p>
            </div>
            <div className='basic-modal-content'>
              <div className='gutter'>
                <div className='grid-2-2'>
                  <div className='grid-item'>
                    <img className='img-small img-bordered' src={require('../../images/burgercamere.jpg')} alt='burger camere' />
                  </div>
                  <div className='grid-item'>
                    <div className='flex-col'>
                      <h3 className='medium-text bold-text black-text pad-b-m'>Peachy Burger</h3>
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
    {click === true ? <ProdcutModal /> : null}
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
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} alt="Image1" />
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} alt="Image2"/>
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} alt="Image3"/>
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} alt="Image4"/>
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} alt="Image5"/>
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} alt="Image6"/>
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} alt="Image7"/>
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} alt="Image8"/>
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} alt="Image9"/>
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} alt="Image10"/>
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} alt="Image10"/>
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} alt="Image11"/>
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
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