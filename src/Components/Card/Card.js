import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
   avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const textRef= useRef(null)

  const handler = () => {
    alert('abcd')
  }

  const handler1 = (event) => {
    event.preventDefault()
    console.log(textRef.current.value)
  }
  
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={handler} >
            <MoreVertIcon/>
          </IconButton>
        }
        title="TASK"
      />
      <CardContent>
        <form onSubmit={handler1}>
        <TextField id={Math.random().toString()} label="Add Task" color="secondary" inputRef={textRef}/>
        </form>
      </CardContent>
    
    </Card>
  );
}
