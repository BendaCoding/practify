import { Dispatch, bindActionCreators } from "redux";
import { compose } from "recompose";
import { connect } from "react-redux";
import { StartScreen } from "./StartScreen";

const mapState = (state: IAppState) => ({
  
})

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators({

  }, dispatch,
);

export default compose<any, any>()(StartScreen)
