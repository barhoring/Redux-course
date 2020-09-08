import { connect } from "react-redux";
import User from "../components/User";

import { removeUser } from "../actions/user-actions";

const mapStateToProps = (state, ownProps) => {
  const { userId } = ownProps;
  const user = state.users.entities[userId];
  return {
    user,
  };
};

const mapDispatchToProps = {
  removeUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
