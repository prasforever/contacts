import React, { Component } from "react";
import { connect } from "react-redux";
import { loadAction } from "../actions/actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Clean Start</p>
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
)(App);
