import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import ContactsList from "./contactsList";
import ContactDetails from "./contactDetails";

class ContactsView extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={3} style={{ backgroundColor: "#ffffff" }}>
          <ContactsList />
        </Grid>
        <Grid item xs={9} align="center">
          <ContactDetails />
        </Grid>
      </Grid>
    );
  }
}

export default ContactsView;
