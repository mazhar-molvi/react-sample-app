import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Provider({ row, handleBack }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={(event) => handleBack(event)}>Back</Button>
      <hr />
      <Avatar variant="square" alt="Remy Sharp" src={row.attributes['profile-image']} />
      <div>{row.attributes['name']}</div>
      {row.attributes['subspecialties'].map((name)=> (
        <div>{name}</div>
      ))}
    </div>
  );
}