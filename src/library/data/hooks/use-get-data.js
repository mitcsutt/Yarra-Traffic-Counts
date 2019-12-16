
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
        console.log(response);
        if (response.success) {
            const { records } = response.result;

            const dataFormatted = aggregate(records);
            console.log(dataFormatted);
            setData(dataFormatted);
        }
        setFetching(false)
    }


    //Reducer to combine the dates 
    const aggregate = (raw) => {
        let count = {};
        const aggregatedData = raw.reduce((acc, curr) => {
            const key = curr['date_captured'];
            const val = parseInt(curr['volume_per_day']);
            if (!count[key]) {
                count[key] = { date_captured: key, volume_per_day: val };
                acc.push(count[key]);
            }
            else {
                count[key].volume_per_day += val;
            }
            return acc;

        }, []);

        // sort by value
        aggregatedData.sort(function (a, b) {
            const date1 = new Date(a.date_captured);
            const date2 = new Date(b.date_captured);
            return date1 - date2;
        });

        return aggregatedData;

    }

    return [data, fetching, getData];
};

/*

Originally I misunderstood the brief and thought it was asking me to average out the data.
I later properly understood it and changed it.
I have left the original code below as an example

*/

// const aggregatedData = raw.reduce((acc, curr) => {
//     const key = curr['date_captured'];
//     const val = parseInt(curr['volume_per_day']);
//     if (!count[key]) {
//         count[key] = { sum: val, data: { date_captured: key, volume_per_day: val, count: 1 } };
//         acc.push(count[key].data);
//     }
//     else {
//         count[key].sum += val;
//         count[key].data.volume_per_day = Math.round(count[key].sum / ++count[key].data.count);
//     }
//     return acc;

// }, []);
