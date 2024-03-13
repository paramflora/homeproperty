import React, { useState } from 'react';
import SearchBar from './child/SearchBar';
import PropertyCard from './child/PropertyCard';
import useApiData from '../utils/useApiData';
import Heading from './Heading';

const Listing = () => {
  const { data, loading, error } = useApiData('/constant/data.json');
  const [searchQuery, setSearchQuery] = useState('');

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error : {error.message}</div>;
  }

  const propertyData = data.Properties;

  return (
    <>
      <section className="property sec_padding">
        <div className='container'>

          <Heading title='Listing' subtitle='Explore wide range of estate' />

          <div className='row'>
            <div className='col-md-6'>
              {/* Pass setSearchQuery as the onSearch prop */}
              <SearchBar onSearch={setSearchQuery} />
            </div>
          </div>

          <div className="row">
            {/* Filter and map over propertyData based on searchQuery */}
            {propertyData.filter(property =>
              property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              property.location.toLowerCase().includes(searchQuery.toLowerCase())
            ).map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Listing;







// import React from 'react';
// import SearchBar from './child/SearchBar';
// import PropertyCard from './child/PropertyCard';
// import useApiData from '../utils/useApiData';
// import Heading from './Heading'

// const Listing = () => {
  
//   const {data, loading, error} = useApiData('/constant/data.json')
//   if(loading){
//       return<div>Loading...</div>
//   }
//   if(error){
//       return <div>Error : {error.message}</div>
//   }

//   const propertyData = data.Properties;

//   return (
//     <>
//       <section className="property sec_padding">
//         <div className='container'>

//         <Heading title='Listing' subtitle='Explore wide range of estate' />

//           <div className='row'>
//             <div className='col-md-6'>
//               <SearchBar />
//             </div>
//           </div>
//           <div className="row">  
                
//               {propertyData.map((property, index) => (
//                 <PropertyCard key={index} property={property} />
//               ))}
//           </div>
//         </div>
//       </section>

     
      
      
//     </>
//   );
// };

// export default Listing;
