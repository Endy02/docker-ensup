import React from 'react'
// import { Link } from 'react-router-dom';

const BannerMenu = () => {
    return (
        <>
          <div className="hero-section" id="hero-section">
              <div className="filter"></div>
              <div className='hero-background'>
                <img src={require('../../images/home_page_banner.jpg')} alt="Background"/>
              </div>
              <div className="hero-content">
                <div className='full-gutter pad-b-xl mobile-top-pad'>
                    <div className='grid-2'>
                        <div className='grid-item'>
                            <img className="img-medium" src={require('../../images/5a38c81c0bc467.9075323715136706840482.png')} alt="Royale Burger"/>
                        </div>
                        <div className='grid-item'>
                            <div className="hero-title">
                                <div className='flex-row-between full-width pad-b-l'>
                                    <h1 className="white-text home-title">Le Royale Burger</h1>
                                    <div className='img-x-small bg-icon-orange'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                        </svg>
                                    </div>
                                </div>
                                <p className='white-text regular-text pad-b-l'>Ce burger est fait pour les amoureux de la viande et du hamburger maison, avec ses oignons et son bacon grillé, il vous fera salivé grâce a ses cornichons et ça sauce maison.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='separator'></div>
                <div className='hero-shape-bot'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 251.386">
                        <path id="Shape" d="M0-75.918s144.095,124.661,528.347,94.1S1229.1-116.248,1515.664-116.248C1790.511-120.729,1920-18.663,1920-18.663V134.994H0Z" transform="translate(0 116.392)" fill="#fff"/>
                    </svg>
                </div>
              </div>
          </div>
          <div className='container-small abs-medium'>
            <div className='full-gutter'>
                <div className='grid-4-2'>
                    <div className='grid-item'>
                        <div className='circle-small bg-danger flex-full-center'>
                            <div className='icon-medium bg-icon-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M504.3 11.1C493.3-1.6 474.5-3.7 461 6.2L252.3 160H397.3L502.6 54.6c11.8-11.8 12.6-30.8 1.6-43.5zM32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32c0 82.5 43.4 147.7 123.9 176.2c-11.1 13.9-19.4 30.3-23.9 48.1C127.6 497.4 142.3 512 160 512H352c17.7 0 32.4-14.6 28.1-31.7c-4.5-17.8-12.8-34.1-23.9-48.1C436.6 403.7 480 338.5 480 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='grid-item'>
                        <div className='circle-small bg-violet flex-full-center'>
                            <div className='icon-medium bg-icon-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                    <path d="M88 0h80c13.3 0 24 10.7 24 24V64H64V24C64 10.7 74.7 0 88 0zM0 151.7c0-15.6 9-29.8 23.2-36.5l24.4-11.4c11-5.1 23-7.8 35.1-7.8h90.6c12.1 0 24.1 2.7 35.1 7.8l24.4 11.4c14.2 6.6 23.2 20.8 23.2 36.5c0 14.4-7.5 27-18.9 34.1c11.5 8.8 18.9 22.6 18.9 38.2c0 16.7-8.5 31.4-21.5 40c12.9 8.6 21.5 23.3 21.5 40s-8.5 31.4-21.5 40c12.9 8.6 21.5 23.3 21.5 40s-8.5 31.4-21.5 40c12.9 8.6 21.5 23.3 21.5 40c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48c0-16.7 8.5-31.4 21.5-40C8.5 415.4 0 400.7 0 384s8.5-31.4 21.5-40C8.5 335.4 0 320.7 0 304s8.5-31.4 21.5-40C8.5 255.4 0 240.7 0 224c0-15.6 7.4-29.4 18.9-38.2C7.5 178.7 0 166.1 0 151.7zM64 240c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zM80 352c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H80z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='grid-item'>
                        <div className='circle-small bg-green flex-full-center'>
                            <div className='icon-medium bg-icon-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M335.1 160c.6-5.3 .9-10.6 .9-16C336 64.5 271.5 0 192 0S48 64.5 48 144c0 5.4 .3 10.7 .9 16H48c-26.5 0-48 21.5-48 48s21.5 48 48 48h53.5 181H336c26.5 0 48-21.5 48-48s-21.5-48-48-48h-.9zM64 288L168.8 497.7c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3L320 288H64z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='grid-item'>
                        <div className='circle-small bg-orange flex-full-center'>
                            <div className='icon-medium bg-icon-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zm240 16c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16zM272 96c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='separator'></div>
            </div>
        </div>
        </>
    )
}

export default BannerMenu