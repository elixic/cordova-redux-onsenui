import { connect } from 'react-redux';
import { hideSideMenu, showSideMenu } from '../actions'
import SideMenu, { ISideMenuDispatchProps, ISideMenuStateProps } from '../components/SideMenu';
import { IAppState } from './state';

/**
 * Notice here that we must make sure to look for the sideMenu specific state when setting the properties for the side menu. Look at the
 * reducers index.ts for where it combines reducers for info on this. To make sure we are mapping things correctly we have imported some
 * types from the side menu component itself, and the global app state that is defined in the state file.
 * @param state 
 */
const mapStateToProps = (state: IAppState): ISideMenuStateProps => ({
  isOpen: state.sideMenu.isOpen, 
  width: state.sideMenu.width,
});

/**
 * We are dispatching actions when event handler properties are triggered here. NOTE: These handlers
 * are set as functions that call dispatch with the appropriate action. If we do not set them to functions
 * but instead just to dispatch(callAction) the handler will point to object and the dispatch will only happen when
 * this function is called.
 * @param dispatch 
 */
const mapDispatchToProps = (dispatch: any): ISideMenuDispatchProps => ({
  handleOpen: () => dispatch(showSideMenu()),
  handleClose: () => dispatch(hideSideMenu()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);