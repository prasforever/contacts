import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import ContactsList from "./contactsList";
import ContactDetails from "./contactDetails";

class ContactsView extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <ContactsList />
        </Grid>
        <Grid item xs={8} align="center">
          <ContactDetails />
        </Grid>
      </Grid>
    );
  }
}

export default ContactsView;
