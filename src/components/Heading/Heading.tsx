import * as S from './Heading.styles';
import { HeadingProps } from './Heading.types';

const Heading = ({ children, ...rest }: HeadingProps) => {
  return <S.Heading {...rest}>{children}</S.Heading>;
};

Heading.defaultProps = {
  as: 'h1',
  children: 'Heading component',
  fontWeight: 'black',
};

export default Heading;
