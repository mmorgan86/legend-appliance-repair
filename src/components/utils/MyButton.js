import React from 'react';
import Button from '@material-ui/core/Button';

const MyButton = props => {
  return (
    <Button 
      id="button"
      href={props.link}
      variant="contained"
      size={props.size}
      style={{
        background: props.bck,
        color: props.color
      }} 
      classes={props.class}
    >
      {props.text}
    </Button>
  )
}

export default MyButton;