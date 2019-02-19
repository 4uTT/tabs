import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  body: {
    margin: "20px auto",

    width: "350px"
  },
  bodyTop: {
    display: "flex",
    height: "850px",
    padding: 20,
    boxSizing: "border-box",
    position: "ralative",
    background: "#1d2730",
    flexDirection: "column"
  },
  top: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "45px"
  },
  giveAway: {
    textTransform: "uppercase",
    textDecoration: "none",
    fontSize: "11px",
    color: "orange"
  },
  titles: {
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
    margin: "0 0 30px 0"
  },
  title: {
    listStyle: "none",
    fontSize: "22px",
    color: "#ffffff8a"
  },
  active: {
    color: "#fff"
  },
  onlineCount: {
    width: "100%",
    height: "34px",
    lineHeight: "34px",
    borderRadius: "17px",
    background: "rgba(38, 221, 51, 0.4)",
    paddingLeft: "14px",
    fontSize: "13px",
    color: "#26dd33",
    boxSizing: "border-box",
    marginBottom: "35px"
  },
  message: {
    display: "flex",
    marginBottom: "20px"
  },
  ico: {
    flex: 1
  },
  userName: {
    flex: 1,
    marginLeft: "9px",
    fontSize: "12px",
    color: "orange",
    paddingTop: "4px"
  },
  date: {
    flex: 1,
    marginLeft: "9px",
    fontSize: "12px",
    color: "gray",
    paddingTop: "4px"
  },
  text: {
    marginLeft: "9px",
    fontSize: "12px",
    color: "white",
    paddingTop: "4px"
  },

  bodyBottom: {
    padding: 20,
    boxSizing: "border-box",
    background: "#24313a",
    borderTop: "2px solid #1f2732"
  },
  input: {
    outline: "none",
    width: "100%",
    border: "none",
    background: "none",
    color: "#fff",
    borderBottom: "1px solid #4e5661",
    paddingBottom: "25px"
  },
  rules: {
    lineHeight: "24px",
    marginTop: "20px",
    display: "flex",
    fontSize: "13px",
    color: "gray",
    textDecoration: "none"
  }
});

class TabsTable extends React.Component {
  state = {};

  svg = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill="#fff"
          d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"
        />
      </svg>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.body}>
        <div className={classes.bodyTop}>
          <div className={classes.top}>
            <a href="#">
              <img src="https://picsum.photos/157/38?random" alt="logo" />
            </a>
            <a href="#">{this.svg()}</a>
            <a href="#">{this.svg()}</a>
            <a href="#">{this.svg()}</a>
            <a href="#" className={classes.giveAway}>
              giveaway
            </a>
          </div>

          <ul className={classes.titles}>
            <li className={`${classes.title} ${classes.active}`}>Chat</li>
            <li className={classes.title}>Refferals</li>
            <li className={classes.title}>Fairness</li>
          </ul>

          <div className={classes.onlineCount}>
            <span>&#9899; </span> 345 online
          </div>

          <div className={classes.chat}>
            <div className={classes.message}>
              <div className={classes.ico}>{this.svg()}</div>
              <div className={classes.userName}>sisya01</div>
              <div className={classes.date}>12:34</div>
              <div className={classes.text}>
                Nanan anan na a nanan na ana na na na nan an an dfg sdg sdgdsfg
                dsg dsfg sdg
              </div>
            </div>

            <div className={classes.message}>
              <div className={classes.ico}>{this.svg()}</div>
              <div className={classes.userName}>sisya01</div>
              <div className={classes.date}>12:34</div>
              <div className={classes.text}>
                Nanan anan na a nanan na ana na na na nan an an
              </div>
            </div>

            <div className={classes.message}>
              <div className={classes.ico}>{this.svg()}</div>
              <div className={classes.userName}>sisya01</div>
              <div className={classes.date}>12:34</div>
              <div className={classes.text}>
                Nanan anan na a nanan na ana na na na nan an an
              </div>
            </div>

            <div className={classes.message}>
              <div className={classes.ico}>{this.svg()}</div>
              <div className={classes.userName}>sisya01</div>
              <div className={classes.date}>12:34</div>
              <div className={classes.text}>
                Nanan anan na a nanan na ana na na na nan an an
              </div>
            </div>
          </div>
        </div>
        <div className={classes.bodyBottom}>
          <textarea placeholder="Write meassage..." className={classes.input} />
          <a href="#" className={classes.rules}>
            {this.svg()} Chat rules
          </a>
        </div>
      </div>
    );
  }
}

TabsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TabsTable);
