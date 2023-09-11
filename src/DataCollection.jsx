import React, { useState } from 'react';

const DataCollection = () => {
  const [category, setCategory] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [propertyOwnershipDuration, setPropertyOwnershipDuration] = useState('');
  const [propertyUsage, setPropertyUsage] = useState('');
  const [maintenanceFrequency, setMaintenanceFrequency] = useState('');
  const [homeImprovement, setHomeImprovement] = useState('');
  const [satisfaction, setSatisfaction] = useState('');
  const [qualityOfLife, setQualityOfLife] = useState('');
  const [neighborhoodSafety, setNeighborhoodSafety] = useState('');
  const [proximitySatisfaction, setProximitySatisfaction] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handleBedroomsChange = (event) => {
    setBedrooms(event.target.value);
  };

  const handlePropertyOwnershipDurationChange = (event) => {
    setPropertyOwnershipDuration(event.target.value);
  };

  const handlePropertyUsageChange = (event) => {
    setPropertyUsage(event.target.value);
  };

  const handleMaintenanceFrequencyChange = (event) => {
    setMaintenanceFrequency(event.target.value);
  };

  const handleHomeImprovementChange = (event) => {
    setHomeImprovement(event.target.value);
  };

  const handleSatisfactionChange = (event) => {
    setSatisfaction(event.target.value);
  };

  const handleQualityOfLifeChange = (event) => {
    setQualityOfLife(event.target.value);
  };

  const handleNeighborhoodSafetyChange = (event) => {
    setNeighborhoodSafety(event.target.value);
  };

  const handleProximitySatisfactionChange = (event) => {
    setProximitySatisfaction(event.target.value);
  };

  // You can add more category-specific sections here based on the selected category

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
            {/* Add other options here */}
          </select>
        </div>

        {category === 'Residential-property-owner' && (
          <div>
            <h3>Residential Property Owners</h3>
            <h4>Property Details:</h4>
            <div>
              <label htmlFor="property_type">a. What type of residential property do you own?</label>
              <select id="property_type" value={propertyType} onChange={handlePropertyTypeChange}>
                <option value="">Select Property Type</option>
                {/* Add other options here */}
              </select>
            </div>
            <div>
              <label htmlFor="bedrooms">b. How many bedrooms does your property have?</label>
              <select id="bedrooms" value={bedrooms} onChange={handleBedroomsChange}>
                <option value="">Select Number of Bedrooms</option>
                {/* Add other options here */}
              </select>
            </div>
          </div>
        )}

        {/* Continue with the "Property Ownership" section */}
        {category === 'Residential-property-owner' && (
          <div>
            <h3>Property Ownership</h3>
            <div>
              <label htmlFor="ownership_duration">a. How long have you owned this property?</label>
              <select id="ownership_duration" value={propertyOwnershipDuration} onChange={handlePropertyOwnershipDurationChange}>
                <option value="">Select Ownership Duration</option>
                {/* Add other options here */}
              </select>
            </div>
            <div>
              <label htmlFor="property_usage">b. Is this property your primary residence or a secondary property?</label>
              <select id="property_usage" value={propertyUsage} onChange={handlePropertyUsageChange}>
                <option value="">Select Property Usage</option>
                {/* Add other options here */}
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
