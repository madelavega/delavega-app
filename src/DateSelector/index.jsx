import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

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
            history.push(`results/${selectedValue}`);
        }
    };

    /**
     * because the nature of the web components and their imperative approach and react ones is declarative,
     * we need to access them throw refs and changes their attributes like this.
     *
     * Besides, in this particular case, we need to subscribe to a component event, but react doesn't support
     * native DOM events for now
     */
    useEffect(() => {
        const { dates, defaultEmptyValue } = props,
            currentNode = dropDown.current;
        currentNode.data = dates;
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
    dates: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        text : PropTypes.string,
    })),
    defaultEmptyValue: PropTypes.bool,
    selectDate       : PropTypes.func,
    selectedDate     : PropTypes.string,
};

export default DateSelector;