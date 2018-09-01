import {connect} from "react-redux";
import signUp from "../components/sign-up";
import increment from "../actions/signUp";

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (user) => dispatch(signUp(user))
});

export default connect(undefined, mapDispatchToProps)(SignUp);