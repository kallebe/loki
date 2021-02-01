import styled from 'styled-components';

export default Container = styled.View`
  background-color: #131B26;
  flex: 1;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
`;
