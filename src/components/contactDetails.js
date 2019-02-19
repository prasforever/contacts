import React, { Component } from "react";
import { isEmpty } from "lodash";
import { connect } from "react-redux";
import { userSelectedAction } from "../actions/actions";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const styles = {
  card: {
    maxWidth: 350,
    margin: "0 auto",
    borderLeft: "1px solid #bbbbbb"
  },
  media: {
    height: 350,
    width: 350
  }
};

class ContactDetails extends Component {
  userSelectedAction = event => {
    this.props.userSelectedAction();
  };

  render() {
    const { classes } = this.props;
    if (isEmpty(this.props.userSelected)) {
      return (
        <Card className={classes.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Please select a user
            </Typography>
          </CardContent>
        </Card>
      );
    } else {
      return (
        <Card className={classes.card}>
          <CardHeader
            align="left"
            title={`${
              this.props.userData[this.props.userSelected].general.firstName
            } ${this.props.userData[this.props.userSelected].general.lastName}`}
          />
          <CardMedia
            className={classes.media}
            image={this.props.userData[this.props.userSelected].general.avatar}
            title={`${
              this.props.userData[this.props.userSelected].general.firstName
            } ${this.props.userData[this.props.userSelected].general.lastName}`}
          />
          <CardContent>
            <Typography component="p">
              {this.props.userData[this.props.userSelected].job.title}
              {", "}
              <br />
              {this.props.userData[this.props.userSelected].job.company}
            </Typography>
            <br />
            <Typography component="p">
              {this.props.userData[this.props.userSelected].address.street}{" "}
              <br />
              {this.props.userData[this.props.userSelected].address.city} <br />
              {this.props.userData[this.props.userSelected].address.country}
              {" ("}
              {this.props.userData[this.props.userSelected].address.zipCode}
              {")"}
            </Typography>
            <br />
            <Typography component="p">
              {this.props.userData[this.props.userSelected].contact.phone}
              <br />
              {this.props.userData[this.props.userSelected].contact.email}
            </Typography>
          </CardContent>
        </Card>
      );
    }
  }
}

const mapStateToProps = ({ userSelected, userData }) => ({
  userSelected,
  userData
});

const mapDispatchToProps = dispatch => ({
  userSelectedAction: () => dispatch(userSelectedAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ContactDetails));
