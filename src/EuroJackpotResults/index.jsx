import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function EuroJackpotResult(props) {
    const { data, loading } = props,
        tableInstance = useRef(),
        { date } = useParams();

    const [ table, setTable ] = useState(null);
    
    /**
     * check date url parameter to load results for this date
     */
    useEffect(() => {
        props.loadResults?.(date);
        if(!table) {
            setTable(import('delavega-lib/Table'));
        }
    }, [date]);

    /**
     * check data property to update the table element
     *
     * because the nature of the web components and their imperative approach and react ones is declarative,
     * we need to access them throw refs and changes their attributes like this.
     *
     */
    useEffect(() => {
        const currentNode = tableInstance.current;
        currentNode && (currentNode.data = data);
    }, [data]);

    /**
     *
     * check loading property to shows table loading state
     *
     * because the nature of the web components and their imperative approach and react ones is declarative,
     * we need to access them throw refs and changes their attributes like this.
     *
     */
    useEffect(() => {
        const currentNode = tableInstance.current;
        currentNode && (currentNode.loading = loading);
    }, [loading]);

    return (
        <div>
            {
                table
                    ? <delavega-table ref={tableInstance}>
                        <delavega-table-column
                            header="Tier"
                            dataIndex="tier"
                        />
                        <delavega-table-column
                            header="Match"
                            dataIndex="match"
                        />
                        <delavega-table-column
                            header="Winners"
                            dataIndex="winners"
                        />
                        <delavega-table-column
                            header="Amount"
                            type="currency" //column type. It will show the currency in the cell renderer
                            dataIndex="amount"
                        />
                    </delavega-table>
                    : <span>Loading...</span>
            }
        </div>
    );
}

EuroJackpotResult.propTypes = {
    loadResults: PropTypes.func,
    loading    : PropTypes.bool,
    data       : PropTypes.arrayOf(PropTypes.shape({
        tier   : PropTypes.string,
        amount : PropTypes.string,
        match  : PropTypes.string,
        winners: PropTypes.string,
    })),
};

export default EuroJackpotResult;