
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

            const dataFormatted = aggregate(records);
            console.log(dataFormatted);
            setData(dataFormatted);
        }
        setFetching(false)
    }


    const aggregate = (raw) => {
        let count = {};
        const aggregatedData = raw.reduce((acc, curr) => {
            const key = curr['date_captured'];
            const val = parseInt(curr['volume_per_day']);
            if (!count[key]) {
                count[key] = { sum: val, data: { x: key, y: val } };
                count[key].data.count = 1;
                acc.push(count[key].data);
            }
            else {
                count[key].sum += val;
                count[key].data.y = Math.round(count[key].sum / ++count[key].data.count);
            }
            return acc;

        }, []);

        return aggregatedData;

    }

    return [data, fetching, getData];
};

