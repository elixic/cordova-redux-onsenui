import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  Toolbar as OUIToolbar,
  ToolbarButton,
  BackButton,
  Icon,
} from 'react-onsenui';

interface IToolbarProps {
  handleClick: () => void;
}

const Toolbar = ({ handleClick }: IToolbarProps) => (
  <OUIToolbar>
    <div className='left'>
      <BackButton>Back</BackButton>
    </div>
    <div className='center'>
      Side menu
    </div>
    <div className='right'>
      <ToolbarButton onClick={handleClick}>
        <Icon icon='ion-navicon, material:md-menu' />
      </ToolbarButton>
    </div>
  </OUIToolbar>
);

Toolbar.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default Toolbar