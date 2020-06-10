import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { CONFIRMATION, DELETE_MESSAGE, DELETE, CANCEL} from '../../../Constants/Constants'

export default function DraggableDialog(props) {
  const handleCancel = () => {
    props.cancel()
  };

  const handleClose = () => {
    props.deleteHandler()
  };

  return (
    <div>
     <Dialog open={props.show}>
        <DialogTitle style={{ cursor: 'move' }} id="title">
         {CONFIRMATION}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          {DELETE_MESSAGE}
          </DialogContentText>
        </DialogContent>
        <DialogActions>          
          <Button onClick={handleClose} color="primary">
            {DELETE}
          </Button>
          <Button autoFocus onClick={handleCancel} color="primary">
            {CANCEL}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
