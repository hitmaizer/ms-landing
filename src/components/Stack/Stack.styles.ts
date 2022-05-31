import styled from 'styled-components';
import { gridGap } from 'styled-system';
import Box from '../Box';

import { StackProps } from './Stack.types';

export const Stack = styled(Box)<StackProps>`
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
  place-content: ${({ placeContent }) => placeContent};
  place-items: ${({ placeItems }) => placeItems};
  ${gridGap};
  &::-webkit-scrollbar {
    display: none;
  }
`;
