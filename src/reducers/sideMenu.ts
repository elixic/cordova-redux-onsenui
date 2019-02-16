import { TOGGLE_SIDE_MENU, IToggleSideMenuAction } from '../actions';
import { ISideMenuState } from '../containers/state';

/**
 * We are only concerned with the sideMenu state in this reducer. The parent state will contain a sideMenu property, and that's what this
 * reducer will be setting.
 * @param state 
 * @param action 
 */
export default function sideMenu(state:ISideMenuState = { width: 240, isOpen: false }, action: IToggleSideMenuAction): ISideMenuState {
  // todo: figure out when / how to set the width.
  if (action.type === TOGGLE_SIDE_MENU) {
    return {...state, isOpen: action.isOpen };
  } else {
    return state;
  }
}

