import { actionCreators } from './actions';
import DateSelector from './index';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    const {
        dateSelector : { dates, selectedDate },

    } = state;

    return {
        dates,
        selectedDate,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        selectDate: (selectedDate) => dispatch(actionCreators.selectDate(selectedDate)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector);
