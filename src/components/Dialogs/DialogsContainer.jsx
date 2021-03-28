import { connect } from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    data: state.dialogPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
