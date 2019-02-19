import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Input from "@material-ui/core/Input";

import ContactsMiniCard from "./contactMiniCard";

const styles = {
  inputBox: {
    padding: 15,
    margin: "0 auto",
    width: "100%"
  },
  searchField: {
    margin: "0 auto",
    width: "80%"
  }
};

class ContactsList extends Component {
  constructor() {
    super();

    this.state = {
      filterString: ""
    };
  }

  filterList = event => {
    this.setState({ filterString: event.currentTarget.value.toLowerCase() });
  };

  renderContent() {
    let userlist = [];

    for (var key in this.props.userData) {
      let fullName = `${this.props.userData[key].general.firstName} ${
        this.props.userData[key].general.lastName
      }`.toLowerCase();

      if (
        fullName.includes(this.state.filterString) ||
        this.props.userData[key].job.company
          .toLowerCase()
          .includes(this.state.filterString) ||
        this.props.userData[key].job.title
          .toLowerCase()
          .includes(this.state.filterString) ||
        this.props.userData[key].contact.email
          .toLowerCase()
          .includes(this.state.filterString) ||
        this.props.userData[key].contact.phone
          .toLowerCase()
          .includes(this.state.filterString) ||
        this.props.userData[key].address.street
          .toLowerCase()
          .includes(this.state.filterString) ||
        this.props.userData[key].address.city
          .toLowerCase()
          .includes(this.state.filterString) ||
        this.props.userData[key].address.zipCode
          .toLowerCase()
          .includes(this.state.filterString) ||
        this.props.userData[key].address.country
          .toLowerCase()
          .includes(this.state.filterString)
      ) {
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
    }
    return userlist;
  }

  render() {
    const { classes } = this.props;
    return (
      <List>
        <ListItem className={classes.inputBox}>
          <Input
            type="text"
            placeholder="Search"
            onChange={this.filterList}
            className={classes.searchField}
          />
        </ListItem>
        {this.renderContent()}
      </List>
    );
  }
}

const mapStateToProps = ({ userData }) => ({ userData });

export default connect(mapStateToProps)(withStyles(styles)(ContactsList));
