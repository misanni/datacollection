import React, { useState } from 'react';

const DataCollection = () => {
  const [category, setCategory] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handleBedroomsChange = (event) => {
    setBedrooms(event.target.value);
  };

  return (
    <div>
      <h1>Data Collection Questions:</h1>
      
      <div>
        <h2>Initial Questions</h2>
        1. Demographic information
        <div>
          <label htmlFor="category">2. Which category do you want to apply for?</label>
          <select id="category" value={category} onChange={handleCategoryChange}>
            <option value="">Select an option</option>
            <option value="Residential-property-owner">Residential property owner</option>
            <option value="Commercial property-owner">Commercial property owner</option>
            <option value="Residential-property-tenant">Residential property tenant</option>
            <option value="Commercial-property-tenant">Commercial property tenant</option>
            <option value="Stakeholders"> Stakeholders- contractors, government entities(municipalities), finance organization, real estate developers and businesses</option>
            <option value="Internal users- admin, regular team members">Residential property tenant</option>
            {/* Add other options here */}
          </select>
        </div>

        {category === 'Residential-property-owner' && (
          <div>
            <h3>Residential Property Owners</h3>
            <h4>Property Details:</h4>
            <div>
              <label htmlFor="property_type">What type of residential property do you own?</label>
              <select id="property_type" value={propertyType} onChange={handlePropertyTypeChange}>
                <option value="">Select Property Type</option>
                <option value="">Single-family house</option>
                <option value="">Townhouse</option>
                <option value="">Condominium</option>
                <option value="">Apartment/Flat</option>
                <option value="">Other (please specify)</option>
                {/* Add other options here */}
              </select>
            </div>
            <div>
              <label htmlFor="bedrooms">How many bedrooms does your property have?</label>
              <select id="bedrooms" value={bedrooms} onChange={handleBedroomsChange}>
                <option value="">Select Number of Bedrooms</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5 or more</option>
                {/* Add other options here */}
                <h4>Property Ownership</h4>
              </select>
            </div>
          </div>
        )}
        
        {/* Continue with other sections based on the selected category */}
        
      </div>
      {/* Add a submit button */}
     
    </div>
    
  );
};

export default DataCollection;
