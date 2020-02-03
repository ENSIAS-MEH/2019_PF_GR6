import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Garbage1 from "../media/garbage1.jpeg";
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      left:"30%"
    },
  },
  rounded: {
    height:"35%",
    width:"35%",
  },
}));

export default function PostAvatar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar variant="rounded" src={props.avatar || Garbage1} className={classes.rounded}>
        <AssignmentIcon />
      </Avatar>
    </div>
  );
}