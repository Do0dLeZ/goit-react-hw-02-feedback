import React from "react";
import propTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
};

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.element.isRequired
}

export default Section;
