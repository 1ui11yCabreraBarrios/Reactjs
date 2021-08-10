import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteCompra } from "../Actions/actionsCine";
import { useDispatch } from "react-redux"


export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
   const dispatch = useDispatch();

  const handleClickOpen = () => {
   
    setOpen(true);
  };

  const handleClose = () => {
    console.log(props.index)
    dispatch(deleteCompra(props.index))
      
    setOpen(false);
  };
  
  
  return (
    <div>
      <DeleteIcon
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{textAlign:"center"}}>
          {" "}
          <DeleteIcon variant="contained" color="secondary"  />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Desea Elimiar esta compra?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose}color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
