import * as React from 'react';
import * as PropTypes from 'prop-types';
import Hello from './Hello';

import {
  Page,
  Splitter,
  SplitterSide,
  SplitterContent,
  List,
  ListItem,
  ListHeader
} from 'react-onsenui';

import Toolbar from './SideMenuToolbar';

export interface ISideMenuDispatchProps {
  handleClose: () => void;
  handleOpen: () => void;
}

export interface ISideMenuStateProps {
  isOpen: boolean;
  width: number;
}

export interface ISideMenuProps extends ISideMenuDispatchProps, ISideMenuStateProps {}

const renderToolbar = (handleOpen: () => void) => (
  <Toolbar handleClick={handleOpen} />
);

const renderRow = (row: number) => (
  <ListItem key={`menu-item-${row}`} modifier='longdivider' tappable>
    <Hello who={`menu item ${row}`} />
  </ListItem>
);

const SideMenu = ({isOpen, width, handleClose, handleOpen}: ISideMenuProps) => (
  <Page>
    <Splitter>
      <SplitterSide
        side='left'
        isOpen={isOpen}
        onClose={handleClose}
        onOpen={handleOpen}
        collapse={true}
        width={width}
        swipeable={true}>
        <Page>
          <List
            dataSource={[1, 2, 3, 4]}
            renderHeader={() => <ListHeader>Menu</ListHeader>}
            renderRow={(i) => renderRow(i)}
          />
        </Page>
      </SplitterSide>

      <SplitterContent>
        <Page renderToolbar={() => renderToolbar(handleOpen) }>
          <p style={{textAlign: 'center'}}>
            Swipe right to open menu!
          </p>
          <ul>
            <li>{`isOpen: ${isOpen}`}</li>
            <li>{`width: ${width}`}</li>
          </ul>
        </Page>
      </SplitterContent>
    </Splitter>
  </Page>
)

SideMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default SideMenu;
