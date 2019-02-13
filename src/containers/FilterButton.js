import { connect } from 'react-redux';

import Button from '../components/Button';

import { setVisibilityFilter } from '../actions';
import { selectVisibilityFilter } from '../selectors';

const mapStateToProps = (state, props) => ({
    active: props.filter === selectVisibilityFilter(state)
});

const mapDispatchToProps = (dispatch, props) => ({
    onClick: () => {
        dispatch(setVisibilityFilter({
            filter: props.filter
        }));
    }
});

const FilterButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);

export default FilterButton;