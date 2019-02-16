import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface IHelloProps {
  who: string;
}

const Hello = ({ who }: IHelloProps) =>  (
  <div>Hello {who}!</div>
);

Hello.propTypes = {
  who: PropTypes.string.isRequired,
}

export default Hello;