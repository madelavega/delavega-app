import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import 'delavega-lib';

function JacksPotResults(props) {
    const table = useRef();

    /**
     *
     */
    useEffect(() => {
        const { data } = props,
            currentNode = table.current;
        currentNode.data = data;
    }, ['data']);

    return (
        <div>
            <delavega-table ref={table}>
                <delavega-table-column header="Tier" dataIndex="tier"/>
                <delavega-table-column header="Match" dataIndex="match"/>
                <delavega-table-column header="Winners" dataIndex="winners"/>
                <delavega-table-column header="Amount" dataIndex="amount"/>
            </delavega-table>
        </div>
    );
}

JacksPotResults.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        tier   : PropTypes.string,
        amount : PropTypes.string,
        match  : PropTypes.string,
        winners: PropTypes.string,
    })),
};

export default JacksPotResults;