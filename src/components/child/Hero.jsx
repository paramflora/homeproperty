import React from 'react'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <>
        <section className="hero sec_padding">
            <div className="container">
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="hero_content">
                            <p className="hero_subtitle">
                                <i className="fa-solid fa-house-chimney"></i> <span>Real Estate Agency</span>
                            </p>
                            <h2 className="hero_title">Find Your Dream House By Us</h2>
                            <p className="hero_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                            </p>
                            <SearchBar/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <figure className="hero_banner">
                            <img src="./images/hero_banner.png" alt="Modern house model" className="w-100" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero