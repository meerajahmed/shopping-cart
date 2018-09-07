import {connect} from "react-redux";
import CartSummary from "../components/cart-summary";
import {cartItemsCount, cartTotal} from "../selectors/cart";

const mapStateToProps = (state) =>
  ({
    cartItemsCount: cartItemsCount(state),
    cartTotal: cartTotal(state)
  });

export default connect(mapStateToProps)(CartSummary);