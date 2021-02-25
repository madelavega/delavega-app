import EuroJackpotResults from './index';
import { connect } from 'react-redux';
import { actionCreators } from '../DateSelector/actions';

const mapStateToProps = (state) => {
    const {
        euroJackpotResults : { data },
    } = state;

    return {
        data,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        loadResults: (selectedDate) => dispatch(actionCreators.loadResults(selectedDate)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EuroJackpotResults);
