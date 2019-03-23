import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './table.scss'

const styles = theme => ({
    root: {
        width: '60%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;
function createData(date, name, sum) {
    id += 1;
    return { id, date, name, sum };
}

const rows = [
    createData("03.04.2017","Children's home N23 of Minsk", "215 rub"),
    createData("03.04.2017","Children's home N23 of Minsk", "215 rub"),
    createData("03.04.2017","Children's home N23 of Minsk", "215 rub"),
    createData("03.04.2017","Children's home N23 of Minsk", "215 rub"),
    createData("03.04.2017","Children's home N23 of Minsk", "215 rub"),
];

function SimpleTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Donation history</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="right">Organization</TableCell>
                        <TableCell align="right">The sum</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.sum}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);