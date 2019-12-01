import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import DefectPriorityCustomToolbar from "./DefectPriorityCustomToolbar";
import DefectPriorityCustomToolbarSelect from "./DefectPriorityCustomToolbarSelect";

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
    name: "PriorityId",
    label: "Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "PriorityName",
    label: "Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Description",
    label: "Description",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    PriorityId: "DP-001",
    PriorityName: "High",
    Description: "Must be fixed immediately / in the next build"
  },
  {
    PriorityId: "DP-002",
    PriorityName: "Medium",
    Description:
      "Must be fixed in any of the upcoming builds but should be included in the release"
  },
  {
    PriorityId: "DP-003",
    PriorityName: "Low",
    Description: "May be fixed after the release / in the next release"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  customToolbar: () => {
    return <DefectPriorityCustomToolbar />;
  },
  customToolbarSelect: () => {
    return <DefectPriorityCustomToolbarSelect />;
  }
};

export default function ManageDefectPriority() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
