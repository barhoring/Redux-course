import List from "../components/List";
import { connect } from "react-redux";

import { removeList } from "../actions/list-actions";

const mapStateToProps = (state, ownProps) => {
  const { listId } = ownProps;
  return { list: state.lists.entities[listId] };
};

const mapDispatchToProps = { removeList };

export default connect(mapStateToProps, mapDispatchToProps)(List);
