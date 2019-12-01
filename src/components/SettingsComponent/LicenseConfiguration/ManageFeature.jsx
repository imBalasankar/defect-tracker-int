import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import FeatureCustomToolbar from "./FeatureCustomToolbar";
import FeatureCustomToolbarSelect from "./FeatureCustomToolbarSelect";

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
    name: "FeatureId",
    label: "Feature Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "FeatureName",
    label: "Feature Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "FeatureDescription",
    label: "Feature Description",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    FeatureId: "F-101",
    FeatureName: "Manage 5 Projects",
    FeatureDescription: "Company can manage only 5 projects"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  customToolbar: () => {
    return <FeatureCustomToolbar />;
  },
  customToolbarSelect: () => {
    return <FeatureCustomToolbarSelect />;
  }
};

export default function ManageFeature() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
