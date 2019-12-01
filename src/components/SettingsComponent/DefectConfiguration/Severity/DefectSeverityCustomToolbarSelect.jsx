import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import EditDefectSeverityForm from "./EditDefectSeverityForm";
import Axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  fab: {
    marginTop: "4px",
    marginBottom: "4px",
    marginRight: theme.spacing(2)
  }
}));

export default function DefectSeverityCustomToolbarSelect({
  id,
  onEdit,
  onDelete
}) {
  const classes = useStyles();
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [severity, setSeverity] = React.useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:8087/api/v1/severity/${id()}`)
      .then(response => {
        console.log(response);
        setSeverity(response.data.results.listSeverity);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleAddOpen = () => {
    setOpenAdd(true);
  };

  const handleAddClose = () => {
    setOpenAdd(false);
    onEdit();
  };

  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  return (
    <div>
      <Tooltip title={"Edit"}>
        <Fab
          color="secondary"
          aria-label="edit"
          className={classes.fab}
          size="small"
          onClick={handleAddOpen}
        >
          <EditIcon />
        </Fab>
      </Tooltip>
      <Dialog
        open={openAdd}
        onClose={handleAddClose}
        aria-labelledby="add-project-title"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="add-project-title">Edit Severity</DialogTitle>
        <Divider />
        <DialogContent>
          <EditDefectSeverityForm
            onFinish={handleAddClose}
            severity={severity}
            id={id}
          />
        </DialogContent>
      </Dialog>

      <Tooltip title={"Delete"}>
        <Fab
          color="default"
          aria-label="delete"
          className={classes.fab}
          size="small"
          onClick={handleDeleteOpen}
        >
          <DeleteIcon />
        </Fab>
      </Tooltip>

      <Dialog
        open={openDelete}
        onClose={handleDeleteClose}
        aria-labelledby="delete-project-title"
        fullWidth={true}
        maxWidth={"xs"}
      >
        <DialogTitle id="delete-project-title">Delete Priority</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are about to delete an item, are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={onDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
