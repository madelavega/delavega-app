import EuroJackpotResults from './index';
import { connect } from 'react-redux';
import { actionCreators } from './actions';

const mapStateToProps = (state) => {
    const {
        euroJackpotResults : { data, loading },
    } = state;

    return {
        data,
        loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadResults: (selectedDate) => dispatch(actionCreators.loadResults(selectedDate)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EuroJackpotResults);
