import React, { useState, useEffect } from "react";
import useApiData from "../../utils/useApiData";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);
  const { data, loading, error } = useApiData("/constant/data.json");

  useEffect(() => {
    let timer;
    if (!loading && !error && data && data.Properties) {
      // Debounce search input to reduce API calls
      timer = setTimeout(() => {
        const filtered = data.Properties.filter((property) =>
          property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.location.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProperties(filtered);
      }, 300); // Adjust debounce delay as needed
    }

    return () => clearTimeout(timer); // Cleanup timer on component unmount or re-render
  }, [data, loading, error, searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
    // setFilteredProperties([]);
    onSearch(""); // Notify the parent component that the search query is cleared
  };

  return (
    <>
      <div className="hero_search">
        <div className="hero_search_form">
        <input
          className="form-control srch_field"
          type="text"
          placeholder="Search by property name or location..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            if (typeof onSearch === 'function') {
              onSearch(e.target.value); // Update search query in parent component
            }
          }}
        />

          {searchQuery && (
            <>
              <button className="btn btn-secondary btn-sm srch_fieldBtn" onClick={clearSearch}>Clear</button>
              {filteredProperties.length > 0 ? (
                <ul className="srch_propertyList">
                  {filteredProperties.map((property) => (
                    <li key={property.id}>
                      <h5>{property.name}</h5>
                      <p><i className="fa-solid fa-location-dot"></i> {property.location}</p>
                      <p><i className="fa-solid fa-dollar-sign"></i> {property.price}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="notFound">No properties found</p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;


// import React, { useState, useEffect } from "react";
// import useApiData from "../../utils/useApiData";

// const SearchBar = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredProperties, setFilteredProperties] = useState([]);
//   const { data, loading, error } = useApiData("/constant/data.json");

//   useEffect(() => {
//     if (!loading && !error && data && data.Properties) {
//       // Filter properties based on search query
//       const filtered = data.Properties.filter((property) =>
//         property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         property.location.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredProperties(filtered);
//     }
//   }, [data, loading, error, searchQuery]);

//   return (
//     <>
//       <div className="hero_search">
//         <div className="hero_search_form">
//           <input
//             className="form-control srch_field"
//             type="text"
//             placeholder="Search by property name..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />

//           {searchQuery && (
//             <>
//               {filteredProperties.length > 0 ? (
//                 <ul className="srch_propertyList">
//                   {filteredProperties.map((property) => (
//                     <li key={property.id}>
//                       <h5>{property.name}</h5>
//                       <p><i className="fa-solid fa-location-dot"></i> {property.location}</p>
//                       <p><i className="fa-solid fa-dollar-sign"></i> {property.price}</p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="notFound">No properties found</p>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };