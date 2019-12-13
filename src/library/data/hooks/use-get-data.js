
/**
 * External Dependencies
 */
import { useState } from 'react';
/**
 * Internal Dependencies
 */

import Request from 'library/gateway';
import { getDataConfig } from 'library/data/requests.js';


export default () => {
    const [data, setData] = useState([]);
    const [fetching, setFetching] = useState(false);

    const getData = async () => {
        setFetching(true);

        const response = await Request(getDataConfig);

        if (response.success) {
            const { records } = response.result;
            const dataFormatted = records.map((record) => {
                const { date_captured, volume_per_day } = record;
                return { date_captured, volume_per_day }
            })
            setData(dataFormatted);
        }
        setFetching(false)
    }

    return [data, fetching, getData];
};