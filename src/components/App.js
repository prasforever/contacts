import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { loadAction } from "../actions/actions";
import LoaderView from "./loaderView";
import ContactsView from "./contactsView";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#eeeeee"
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#2196f3"
  }
});

class App extends Component {
  renderContent() {
    if (isEmpty(this.props.userData)) {
      return <LoaderView />;
    } else {
      return <ContactsView />;
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <div className="root" />
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Contacts Viewer
            </Typography>
            <Button color="inherit">Clear Data</Button>
          </Toolbar>
        </AppBar>
        <Grid align="center" item xs={10}>
          {this.renderContent()}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ loadAction }) => ({ loadAction });

const mapDispatchToProps = dispatch => ({
  loadAction: () => dispatch(loadAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
