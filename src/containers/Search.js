import React from 'react';
import { connect } from 'react-redux';

import { setKeyword } from '../redux/actions';
import { selectKeyword } from '../redux/selectors';

const Search = ({ value, onChange }) => (
  <form className="mt-5">
    <div className="form-group">
      <input
        className="form-control"
        name="keyword"
        value={value}
        onChange={onChange}
        placeholder="Keyword"
      />
    </div>
  </form>
);

const mapStateToProps = state => ({
  value: selectKeyword(state)
});

const mapDispatchToProps = dispatch => ({
  onChange: event => {
    dispatch(
      setKeyword({
        keyword: event.target.value
      })
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
