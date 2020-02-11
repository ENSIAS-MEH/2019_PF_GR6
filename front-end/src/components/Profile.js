import React from "react";
import OnConstruction from "./OnConstruction";
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

export default function Profile(){
    const classes = useStyles();
    return(
        <div>
            <TextField
                disabled
                id="login-in"
                label="Login"
                defaultValue="Lemine"
                variant="outlined"
            />
            <TextField
                disabled
                id="password-in"
                label="Password"
                defaultValue="$^^$"
                variant="outlined"
            />
        </div>
    )
}