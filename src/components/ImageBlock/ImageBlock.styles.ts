import Image from 'next/image';
import styled from 'styled-components';

export const ImageBlock = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;
