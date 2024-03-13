import React from 'react'
import { Link } from 'react-router-dom'

const PropertyCard = (props) => {
    const property = props.property;

    // Get the current date
        //const currentDate = new Date();
        //const formattedDate = currentDate.toLocaleString('en-US', { month: 'short', day: 'numeric' });

    if (!property || !property.category) {
        // Handle the case where property or its category is undefined
        return null; // or display a placeholder, error message, etc.
    }

    // Assign class name based on property type    
    let categoryClass;    
    switch (property?.category) {
      case 'For Rent':
        categoryClass = 'bg-success'; // green
        break;
      case 'For Sale':
        categoryClass = 'bg-warning'; // orange
        break;
      default:
        categoryClass = 'bg-dark'; // default color or handle other cases
        break;
    }



  return (
    <>
      <div className='col-md-4'>
        <div className="property_card">
                <figure className="card_banner">
                    <Link to="/">
                        <img src={property.cover} alt="Richmond Meadows" className="w-100" />
                    </Link>
                    <div className={`card_badge ${categoryClass}`}>{property.category}</div>
                    <div className="banner_actions">
                        <address><i className="fa-solid fa-location-dot"></i> {property.location}</address>
                        <div className="card_occu_date">{property.postedDate}</div>
                    </div>
                </figure>

                <div className="card_content">
                    <div className="card_price">
                        <span className='main_price'><strong>{`$${property.price}`}</strong></span>
                        <span className='sq_price'>{`$${property.pricePerSqft}/sqft`}</span>
                    </div>
                    <h3 className="h3 card_title">
                        <Link to="/">{property.name}</Link>
                    </h3>
                    {/* <p className="card_posted_date">
                        {formattedDate}
                    </p> */}
                    <p className="card_text">
                        {property.type}
                    </p>

                    <ul className="card_list">
                        {
                            Object.keys(property.amenities[0]).slice(0, 4).map((amenityKey) => (
                            <li key={amenityKey} className="amenity-item">
                                <strong>{property.amenities[0][amenityKey].size} </strong>
                                <span>
                                    <i className={`fa-solid ${property.amenities[0][amenityKey].icon}`}></i>
                                </span>
                                <span className='amenity-title'>{property.amenities[0][amenityKey].title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default PropertyCard