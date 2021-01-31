import React from 'react';

import { Button, ButtonText } from './styles';

const ActionButton = ({children, ...rest}) => (
  <Button {...rest}>
    <ButtonText>{children}</ButtonText>
  </Button>
);

export default ActionButton;
