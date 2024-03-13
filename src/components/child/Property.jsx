import React from 'react'
import PropertyCard from './PropertyCard'
import Heading from '../Heading'
import useApiData from '../../utils/useApiData';

const Property = () => {
  const {data, loading, error} = useApiData('/constant/data.json')
  if(loading){
      return<div>Loading...</div>
  }
  if(error){
      return <div>Error : {error.message}</div>
  }

  const featuredProperties = data.Properties.filter((property) => property.isFeatured);
  // const recentProperties = data.Properties.filter((property) => {
  //   // Assume 'addedDate' follows a valid date format
  //   const addedDate = new Date(property.addedDate);
  //   return addedDate > new Date(); // Filter recent additions
  // });
  const recentProperties = data.Properties.filter(property => !property.isFeatured);

  return (
    <>
    {
      featuredProperties.length > 0 &&
      (
        <section className="property sec_padding">
            <div className='container'>
                <Heading title='Featured Listings' subtitle='Check out our featured listings' />
                <div className="property_list">
                    <div className='row'>
                      {featuredProperties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                      ))}
                    </div>
                </div>
            </div>
        </section>
      )
    }

    {
      recentProperties.length > 0 && (
        <section className="property sec_padding">
          <div className='container'>
              <Heading title='Latest Listings' subtitle='Explore our most recent listings' />
              <div className="property_list">
                  <div className='row'>
                     {
                      recentProperties.map((property) => (
                        <PropertyCard key={property.id} property={property}/>
                      ))
                     }
                  </div>
              </div>
          </div>
      </section>
      )
    }
    </>
  )
}

export default Property