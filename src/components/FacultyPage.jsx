import React from 'react';
import PropTypes from "prop-types";


function FacultyPage(props) {
  return (
    <div>
    <img src={props.image} />
    <h3>{props.name}</h3>
    <p>{props.quote}</p>
  </div>
   );
}

FacultyPage.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string,
  quote: PropTypes.string,
};

export default FacultyPage;
