import styled from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

export const Navbar = styled.nav`
  ${flexbox}
  ${layout}
  ${space}
  position: fixed;
  z-index: 3;
  background-color: transparent;
  padding: 40px;
  width: 100%;
`;
