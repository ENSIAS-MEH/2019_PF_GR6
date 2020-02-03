import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo192 from "../logo.svg"
import Garbage1 from "../media/garbage1.jpeg";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {createNotification} from "./PopUpMessage"

const useStyles = makeStyles({
  card: {
    width: "30%",
    height: "100%",
    textAlign: "left",
    position: "relative",
    left: "35%"
  },
  media: {
    height: 140,
  },
});

export default function PostDetails(props) {
  const classes = useStyles();
  const defaultPostContent=(<div>
  <p style={{display:"inline-block",marginRight:5}}><strong>Author : </strong>{props.author || "Alaoui" }</p>
  <p style={{display:"inline-block",marginRight:5}}><strong>City : </strong>{props.city || "Rabat" }</p>
  <p style={{display:"inline-block",marginRight:5}}><strong>Price : </strong>{props.price || "400dhs"}</p>
  <p style={{display:"inline-block",marginRight:5}}><strong>Delay : </strong>{props.delay || "2 days"}</p>
  <p style={{display:"inline-block"}}><strong>Category : </strong>{props.category || "standard"}</p>
</div>
);

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={props.clickBack}>
        <CardMedia
          className={classes.media}
          image={props.postDetails.avatar || Garbage1}
          title="Contemplative Reptile"
            
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.postDetails.recruiter }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            {props.postContent?props.postContent:defaultPostContent}
            <div><strong>Description : </strong><br />{props.description || "I really need to get off this garbage ASAP, i want an efficient work and time really matters for me" }</div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <div style={{padding:"5px 147px"}}>
      <CardActions>
        <Button size="small" color="primary" onClick={createNotification('success','Well applied','your application was submitted')}>
          APPLY
        </Button>
        <NotificationContainer/>
      </CardActions>
      </div>
    </Card>
  );
}