/**
 * External Dependencies
 */
import React, { useState } from 'react';
import { slice } from 'lodash';
import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

/**
 * Internal Dependencies
 */
import usePagination from "global/hooks/use-pagination";

import View from 'global/components/view';

const Table = ({ classes = '', data = [] }) => {
    const [pagination, dispatch] = usePagination(data.length, 5);
    const paginatedData = slice(
        data,
        (pagination.currentPage) * pagination.perPage,
        (pagination.currentPage + 1) * pagination.perPage
    );

    const changePage = (e, p) => {
        if (p > pagination.currentPage) {
            dispatch({ type: "next" })
        }

        else {
            dispatch({ type: "previous" })
        }
    }


    return (
        <View classes='view-table'>

            <TableContainer component={Paper}>
                <MaterialTable className={classes}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Month</TableCell>
                            <TableCell align="right">Volume Per Day</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedData.map((row) => (
                            <TableRow key={row.date_captured}>
                                <TableCell component="th" scope="row">
                                    {row.date_captured}
                                </TableCell>
                                <TableCell align="right">{row.volume_per_day}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                count={pagination.total}
                                rowsPerPage={pagination.perPage}
                                page={pagination.currentPage}
                                onChangePage={changePage}
                            />
                        </TableRow>
                    </TableFooter>
                </MaterialTable>
            </TableContainer>
        </View >);
}
export default Table;
