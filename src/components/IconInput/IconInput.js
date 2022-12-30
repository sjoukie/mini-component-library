import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16, 
    borderThickness: 1,
    height: 24
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];

  return (
    <form>
      <Icon id={'search'} strokeWidth={1} size={16} />
      <input type="search" placeholder='Search...'></input>
    </form>
  );
};

const Form = styled.form`
  border-color: transparent;
`;

const InputBase = styled.input`
  font-size: 18px;
  font: Roboto;
`;

export default IconInput;
