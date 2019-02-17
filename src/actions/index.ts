import { Action } from 'redux';

// SIDE MENU ACTIONS

export const TOGGLE_SIDE_MENU = "toggle side menu";

export interface IToggleSideMenuAction extends Action {
  isOpen: boolean;
}

export function hideSideMenu(): IToggleSideMenuAction {
  return {
    type: TOGGLE_SIDE_MENU,
    isOpen: false,
  };
}

export function showSideMenu(): IToggleSideMenuAction {
  return {
    type: TOGGLE_SIDE_MENU,
    isOpen: true,
  };
}

// NETWORK INFORMATION ACTIONS

export const NETWORK_STATE_CHANGE = "network state change";

export interface INetworkStatusAction extends Action {
  isConnected: boolean;
}

/**
 * Call this when the network state changes.
 * @param isConnected 
 */
export function networkStateChange(isConnected: boolean): INetworkStatusAction {
  return {
    type: NETWORK_STATE_CHANGE,
    isConnected,
  };
}

