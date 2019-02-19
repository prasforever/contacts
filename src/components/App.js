import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { loadAction } from "../actions/actions";
import LoaderView from "./loaderView";
import ContactsView from "./contactsView";

const styles = theme => ({
  root: {
    height: "100vh"
  },
  grow: {
    flexGrow: 1
  },
  main: {
    backgroundColor: "#dddddd",
    flexGrow: 1,
    paddingTop: 75
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
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Contacts Viewer
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.root}>
          <Grid container justify="center" className={classes.main}>
            {this.renderContent()}
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ loadAction, userData }) => ({
  loadAction,
  userData
});

const mapDispatchToProps = dispatch => ({
  loadAction: () => dispatch(loadAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
