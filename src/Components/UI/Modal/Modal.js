import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import EditForm from '../../EditForm/EditForm'

/** sideDrawer component 
 *  where form is displayed to users for editing tasks properties
 */
export default function SwipeableTemporaryDrawer(props) {

  const [state, setShow] = React.useState({right: props.show});

  /** function to togle side drawer */
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
           <EditForm taskEdit={props.taskToBeEdit} update={props.updateTask} toggle={props.toggleShow}/>
          </SwipeableDrawer>
        </React.Fragment>
      
    </div>
  );
}
