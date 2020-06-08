import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import EditForm from '../../EditForm/EditForm'


export default function SwipeableTemporaryDrawer(props) {

  const [state, setShow] = React.useState({right: props.show});

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShow(open)
    props.toggleShow()
  };
  return (
    <div>
        <React.Fragment key={'right'}>
          <SwipeableDrawer
            anchor='right'
            open={state['right']}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
           <EditForm task={props.task} update={props.updateTask}/>
          </SwipeableDrawer>
        </React.Fragment>
      
    </div>
  );
}
