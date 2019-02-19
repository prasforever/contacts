import React, { Component } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";

import ContactsMiniCard from "./contactMiniCard";

class ContactsList extends Component {
  renderContent() {
    let userlist = [];

    for (var key in this.props.userData) {
      userlist.push(
        <ContactsMiniCard
          key={key}
          id={key}
          image={this.props.userData[key].general.avatar}
          firstName={this.props.userData[key].general.firstName}
          lastName={this.props.userData[key].general.lastName}
          company={this.props.userData[key].job.company}
        />
      );
    }
    return userlist;
  }

  render() {
    return <List>{this.renderContent()}</List>;
  }
}

const mapStateToProps = ({ userData }) => ({ userData });

export default connect(mapStateToProps)(ContactsList);
