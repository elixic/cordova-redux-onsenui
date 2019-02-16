import { Action } from 'redux';

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

