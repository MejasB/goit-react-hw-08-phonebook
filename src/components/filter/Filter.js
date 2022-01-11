import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {InputContainer, LabelContainer} from '../contactForm/ContactFormStyled';
import {getFilter} from '../../redux/contacts';
import {handleChange} from '../../redux/contacts/contacts-actions';

const Filter = ({filter, handleChange}) => {
  return (
    <>
      <LabelContainer htmlFor="filter">Find contacts by name</LabelContainer>
      <InputContainer
        id="filter"
        type="text"
        onChange={event => {
          return handleChange(event.target.value);
        }}
        name="filter"
      />
    </>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    filter: getFilter(state)
  };
};

const mapDispatchToProps = {
  handleChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
