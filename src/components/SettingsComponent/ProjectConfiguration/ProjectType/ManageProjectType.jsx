import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import ProjectTypeCustomToolbar from "./ProjectTypeCustomToolbar";
import ProjectTypeCustomToolbarSelect from "./ProjectTypeCustomToolbarSelect";

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
    name: "TypeId",
    label: "Project Type Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "TypeName",
    label: "Project Type Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Description",
    label: "Project Type Description",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    TypeId: "T-001",
    TypeName: "Mobile",
    Description: "This is a Mobile based Project"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  customToolbar: () => {
    return <ProjectTypeCustomToolbar />;
  },
  customToolbarSelect: () => {
    return <ProjectTypeCustomToolbarSelect />;
  }
};

export default function ManageProjectType() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
