/**
 * I'm not sure where to put this file, but it defines the global app state and all the interfaces in it will be used to ensure we are
 * setting the correct properties on objects in each file.
 */


export interface ISideMenuState {
  isOpen: boolean;
  width: number;
}

export interface IAppState {
  sideMenu: ISideMenuState;
}