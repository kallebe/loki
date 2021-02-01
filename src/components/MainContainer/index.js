import React from 'react';

import Container from './styles';

export default MainContainer = ({ children, center }) => (
  <Container center={center}>{children}</Container>
);
