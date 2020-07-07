import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Myimage from '../image/my_image.jpg';


const useStyles = makeStyles((theme) => ({
  set: {
    marginLeft:'93%',
    marginTop: '-10%',
  },

  small: {
    width: theme.spacing(7),
    height: theme.spacing(7),

  },
  
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.set}>
      <Avatar alt="Image not Found" src={Myimage} className={classes.small} />
    </div>
  );
}