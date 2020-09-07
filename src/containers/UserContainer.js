import { connect } from "react-redux";
import User from "../components/User";

const mapStateToProps = (state, ownProps) => {
  const { userId } = ownProps;
  const user = state.users.entities[userId];
  return {
    user,
  };
};

export default connect(mapStateToProps)(User);
