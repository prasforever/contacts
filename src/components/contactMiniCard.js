import React, { Component } from "react";
import { connect } from "react-redux";
import { userSelectedAction } from "../actions/actions";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

class ContactsMiniCard extends Component {
  userSelectedAction = event => {
    this.props.userSelectedAction(event.currentTarget.dataset.id);
  };

  render() {
    return (
      <ListItem
        button
        data-id={this.props.id}
        onClick={this.userSelectedAction}
      >
        <Avatar alt={this.props.firstName} src={this.props.image} />
        <ListItemText
          primary={`${this.props.firstName} ${this.props.lastName}`}
          secondary={this.props.company}
        />
      </ListItem>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  userSelectedAction: value => dispatch(userSelectedAction(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsMiniCard);
