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
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Post(props) {
  const classes = useStyles();
  const defaultPostContent=props.postContent || "I'm really in rush, i want a quick service and a clean work, don't hesitate to apply for more information about the post";
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.logo || logo192}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title || "Rabat" }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.postContent?props.postContent:defaultPostContent}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div style={{padding:"5px 110px"}}>
      <CardActions>
        <Button size="small" color="primary" >
          Learn More
        </Button>
      </CardActions>
      </div>
    </Card>
  );
}