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
  titl: {
    fontSize: "12px",
    color: "#fff"
  },
  descrip: {
    fontSize: "11px",
    color: "#fffffbdf",
    lineHeight: "18px"
  },
  input: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between"
  },
  redeemInput: {
    height: "40px",
    lineHeight: "40px",
    border: "none",
    outline: "none",
    background: "none",
    borderBottom: "1px solid gray",
    color: "white",
    fontSize: "12px",
    marginRight: "20px",
    flex: 1
  },
  redeemBtn: {
    background: "none",
    border: "none",
    outline: "none",
    margin: "5px 0",
    width: "90px",
    height: "30px",
    background: "rgba(38, 221, 51, 0.4)",
    color: "#26dd33",
    cursor: "pointer"
  },
  inBlock: {
    marginBottom: "40px"
  },
  outBlock: {
    marginBottom: "25px"
  },
  defBlock: {
    height: "40px",
    borderBottom: "1px solid gray"
  },
  left: {
    height: "40px",
    lineHeight: "40px",
    color: "white"
  },
  right: {
    height: "40px",
    lineHeight: "40px",
    color: "white",
    fontSize: "12px"
  },
  miniBlocks: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%"
  },
  miniBlock: {
    width: "45%"
  },
  collect: {
    width: "100%",
    height: "60px",
    border: "none",
    outline: "none",
    color: "white",
    background: "#26dd33",
    cursor: "pointer"
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

          <div className={classes.descrip}>
            <div className={classes.titl}>Refer and Earn</div>
            Create oa activateyour refferal code to gow up your earnings
            <br />
            Codes can be changed anytime.
            <br />
            <br />
          </div>

          <div className={classes.inBlock}>
            <div className={classes.titl}>Redeem Refferral Code</div>
            <div className={classes.input}>
              <input
                placeholder="Enter code to redeem"
                className={classes.redeemInput}
              />
              <button className={classes.redeemBtn}>Redeem</button>
            </div>
          </div>

          <div className={classes.inBlock}>
            <div className={classes.titl}>Your Referral Code</div>
            <div className={classes.input}>
              <input
                placeholder="LootVip.com"
                className={classes.redeemInput}
              />
              <button className={classes.redeemBtn}>Save</button>
            </div>
          </div>

          <div className={classes.outBlock}>
            <div className={classes.titl}>Affiliate Level</div>
            <div className={`${classes.input} ${classes.defBlock}`}>
              <div className={classes.left}>3</div>
              <div className={classes.right}>0.21 per 100 Refferals</div>
            </div>
          </div>

          <div className={classes.outBlock}>
            <div className={classes.titl}>Refferals</div>
            <div className={`${classes.input} ${classes.defBlock}`}>
              <div className={classes.left}>21</div>
              <div className={classes.right}>+2 more until level 4</div>
            </div>
          </div>

          <div className={classes.miniBlocks}>
            <div className={`${classes.outBlock} ${classes.miniBlock}`}>
              <div className={classes.titl}>Total games</div>
              <div className={`${classes.input} ${classes.defBlock}`}>
                <div className={classes.left}>21</div>
              </div>
            </div>

            <div className={`${classes.outBlock} ${classes.miniBlock}`}>
              <div className={classes.titl}>Total profits</div>
              <div className={`${classes.input} ${classes.defBlock}`}>
                <div className={classes.left}>21233 USD</div>
              </div>
            </div>

            <div className={`${classes.outBlock} ${classes.miniBlock}`}>
              <div className={classes.titl}>Lifetime Earning</div>
              <div className={`${classes.input} ${classes.defBlock}`}>
                <div className={classes.left}>2144 USD</div>
              </div>
            </div>

            <div className={`${classes.outBlock} ${classes.miniBlock}`}>
              <div className={classes.titl}>Available now</div>
              <div className={`${classes.input} ${classes.defBlock}`}>
                <div className={classes.left}>0</div>
              </div>
            </div>
          </div>

          <button className={classes.collect}>Collect Earning</button>
        </div>
      </div>
    );
  }
}

TabsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TabsTable);
