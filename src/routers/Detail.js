import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Detail = ({ toDo }) => {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>
        Created at
        {toDo?.id}
      </h5>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  console.log(id);

  return { toDo: state.find((toDo) => toDo.id === parseInt(id, 10)) };
};

Detail.propTypes = {
  toDo: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(Detail);
