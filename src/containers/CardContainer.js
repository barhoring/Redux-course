import { connect } from "react-redux";
import Card from "../components/Card";
import { removeCard } from "../actions/card-actions";

const mapStateToProps = (state, ownProps) => {
  const { cardId } = ownProps;
  return { card: state.cards.entities[cardId] };
};

export default connect(mapStateToProps, { removeCard })(Card);
