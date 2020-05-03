import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    width: '80%'
  },
  row: {
    cursor: 'pointer'
  }
});


export default function SimpleTable({ rows, handleControlClick }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id </TableCell>
            <TableCell>Links</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Provider Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow className={classes.row} key={row.name} onClick={(event) => handleControlClick(event, row)}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.links.self}</TableCell>
              <TableCell>{row.attributes.name}</TableCell>
              <TableCell>{row.attributes['provider-type']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}