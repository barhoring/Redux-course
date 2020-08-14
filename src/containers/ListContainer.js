import List from "../components/List";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const { listId } = ownProps;
  return { list: state.lists.entities[listId] };
};

export default connect(mapStateToProps)(List);
