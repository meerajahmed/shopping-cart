import {connect} from "react-redux";
import Login from "../components/login";
import {login} from "../actions/auth";

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (data) => dispatch(login(data))
});

export default connect(undefined, mapDispatchToProps)(Login);