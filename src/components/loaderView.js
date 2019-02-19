import React, { Component } from "react";

import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import { loadAction } from "../actions/actions";
const styles = {
  card: {
    align: "center",
    minWidth: 400,
    maxHeight: 250,
    position: "relative",
    top: "20%"
  },
  uploadButton: {
    width: 300,
    margin: 50
  }
};

class LoaderView extends Component {
  render() {
    const { classes } = this.props;
    let fileReader;

    const handleFileRead = e => {
      const content = fileReader.result;
      this.props.loadAction(JSON.parse(content));
    };

    const handleFileChosen = file => {
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    };

    return (
      <Card className={classes.card}>
        <CardHeader align="center" title="Select contacts JSON file" />
        <CardContent>
          <Button
            variant="contained"
            component="label"
            className={classes.uploadButton}
          >
            Upload File
            <input
              type="file"
              style={{ display: "none" }}
              onChange={e => handleFileChosen(e.target.files[0])}
            />
          </Button>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = ({ loadAction, userData }) => ({
  loadAction,
  userData
});

const mapDispatchToProps = dispatch => ({
  loadAction: value => dispatch(loadAction(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LoaderView));
