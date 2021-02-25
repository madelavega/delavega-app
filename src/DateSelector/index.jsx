import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';
import 'delavega-lib';

function DateSelector(props) {
    let history = useHistory();
    const dropDown = useRef(),
        { selectedDate } = props;

    /**
     *
     * @param selectedValue
     */
    const onSelected = ({ detail : { selectedValue } }) => {
        props.selectDate?.(selectedValue);
        if(!!selectedValue && selectedValue !== selectedDate) {
            history.push(`/results/${selectedValue}`);
        }
    };

    /**
     *
     */
    useEffect(() => {
        const { data, defaultEmptyValue } = props,
            currentNode = dropDown.current;
        currentNode.data = data;
        currentNode.defaultEmptyValue = defaultEmptyValue;
        currentNode.value = selectedDate;
        currentNode.addEventListener('selected', onSelected);

        return () => {
            currentNode.removeEventListener('selected', onSelected);
        };
    });

    return (
        <div className="App">
            <delavega-dropdown
                ref={dropDown}
            />
        </div>
    );
}

DateSelector.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        text : PropTypes.string,
    })),
    defaultEmptyValue: PropTypes.bool,
    selectDate       : PropTypes.func,
    selectedDate     : PropTypes.string,
};

export default DateSelector;