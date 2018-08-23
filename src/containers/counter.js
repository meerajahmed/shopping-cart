import {connect} from "react-redux";
import Counter from "../components/counter";
import increment from "../actions/increment";
import decrement from "../actions/decrement";
import incrementAsync from "../actions/incrementAsync";

const mapStateToProps = (count) => ({count});

const mapDispatchToProps = (dispatch) => ({
  handleIncrement: () => dispatch(increment()),
  handleIncrementAsync: () => dispatch(incrementAsync()),
  handleDecrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);