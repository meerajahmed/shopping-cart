import {connect} from "react-redux";
import SignUp from "../components/sign-up";
import {signUp} from "../actions/auth";

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (user) => dispatch(signUp(user))
});

export default connect(undefined, mapDispatchToProps)(SignUp);