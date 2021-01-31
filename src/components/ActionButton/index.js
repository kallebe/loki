import React from 'react';

import { Button } from './styles';

const ActionButton = ({children, ...rest}) => (
  <Button {...rest}>
    {children}
  </Button>
);

export default ActionButton;
