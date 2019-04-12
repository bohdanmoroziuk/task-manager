import React from 'react';
import { connect } from 'react-redux';

import { setKeyword } from '../redux/actions';
import { selectKeyword } from '../redux/selectors';

const Search = ({ keyword, setKeyword }) => (
    <form className="mt-5">
        <div className="form-group">
            <input 
                className="form-control" 
                name="keyword"
                value={keyword} 
                onChange={setKeyword} 
                placeholder="Keyword"  
            />
        </div>
    </form>
);

const mapStateToProps = state => ({
    keyword: selectKeyword(state)
});

const mapDispatchToProps = dispatch => ({
    setKeyword: (event) => {
        dispatch(setKeyword({
            keyword: event.target.value
        }));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);