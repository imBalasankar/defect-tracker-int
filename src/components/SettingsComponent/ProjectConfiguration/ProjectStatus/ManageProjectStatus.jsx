import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import ProjectStatusCustomToolbar from "./ProjectStatusCustomToolbar";
import ProjectStatusCustomToolbarSelect from "./ProjectStatusCustomToolbarSelect";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  container: {
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

const columns = [
  {
    name: "StatusId",
    label: "Project Status Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "StatusName",
    label: "Project Status Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Description",
    label: "Project Status Description",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    StatusId: "S-001",
    StatusName: "Finished",
    Description: "This project is finished"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  customToolbar: () => {
    return <ProjectStatusCustomToolbar />;
  },
  customToolbarSelect: () => {
    return <ProjectStatusCustomToolbarSelect />;
  }
};

export default function ManageProjectStatus() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
