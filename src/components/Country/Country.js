import React from 'react';
import './Country.css'

const Country = (props) => {
  console.log(props.country);
  const {name,area,flags}=props.country;
  return (
    <div className='country'>
      <h2>Country Name:{name.common}</h2>
      <h3>Area:{area}</h3>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;