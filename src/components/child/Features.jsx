import React from 'react'
import Heading from '../Heading'
import useApiData from '../../utils/useApiData';

const Features = () => {
    const {data, loading, error} = useApiData('/constant/data.json')
    if(loading){
        return<div>Loading...</div>
    }
    if(error){
        return <div>Error : {error.message}</div>
    }

  return (
   <>
    <section className="service sec_padding" id="service">
        <div className="container">
            <Heading title='Our Main Focus' subtitle='Explore What Sets Us Apart' />
            <div className="row">
                {
                  data.Features.map((d,i) => (
                        <div className='col-md-3' key={i}>
                            <div className="service-card">
                                <div className="card-icon">
                                    <i className={d.icon}></i>
                                </div>
                                <h3 className="h3 card-title">{d.heading}</h3>
                                <p className="card-text">{d.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
   </>
  )
}

export default Features