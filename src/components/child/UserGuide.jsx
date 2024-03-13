import React from 'react'
import useApiData from '../../utils/useApiData';

const UserGuide = () => {

    const {data, loading, error} = useApiData('/constant/data.json')
    if(loading){
        return<div>Loading...</div>
    }
    if(error){
        return <div>Error : {error.message}</div>
    }
    return (
        <>
            <section className="sub_service" id="service">
                <div className="container">
                    <div className="row">
                        {
                            data.UserGuide.map((d,i) => (
                                <div className='col-md-3' key={i}>
                                    <div className="sub_service_card">
                                        <h3 className="h3 sub_card_title">{d.heading}</h3>
                                        <p className="sub_card_text">{d.text}</p>
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

export default UserGuide
