import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

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
  };
  return (
    <div>
        <React.Fragment key={'right'}>
          <SwipeableDrawer
            anchor='right'
            open={state.right}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
           {props.children}
          </SwipeableDrawer>
        </React.Fragment>      
    </div>
  );
}
