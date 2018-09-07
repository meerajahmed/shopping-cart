import {connect} from "react-redux";
import Header from "../components/header";
import {logout} from "../actions/auth";
import {getUserName} from "../selectors/user";
import {cartItemsCount} from "../selectors/cart";

const mapStateToProps = (state) =>
  ({
    userName: getUserName(state),
    cartItemsCount: cartItemsCount(state)
  });

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);