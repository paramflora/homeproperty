import React from 'react'
import Heading from '../Heading'
import useApiData from '../../utils/useApiData';

const WhyChoose = () => {
  
  const {data, loading, error} = useApiData('/constant/data.json')
  if(loading){
      return<div>Loading...</div>
  }
  if(error){
      return <div>Error : {error.message}</div>
  }

  const whyChooseData = data.WhyChoose;

  return (
    <>
      <section className="whyChoose_wrapp sec_padding">
        <div className="container">
          <div className='row'>
            <div className='col-md-5'>
              <figure className="whyChoose_banner">
                <img src="./images/choose_banner.jpg" alt="Modern house model" className="w-100" />
              </figure>
            </div>
            <div className='col-md-7'>
              
              <div className="whyChoose_content">

              <Heading title='Why Choose Us ?' subtitle='Discover the difference' />
                <p className="whyChoose_text">
                  {whyChooseData.text}
                </p>

                <p className="callout">
                  {whyChooseData.callout}
                </p>

                <button type='button' className="btn">Contact Us</button>

              </div>
            </div>
          </div>

        </div>
      </section>
    
    
    </>
  )
}

export default WhyChoose