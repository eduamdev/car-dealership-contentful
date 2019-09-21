import styled from 'styled-components';
import viewport from '../styles/media';

const Icon = styled.span`
  width: 26px;

  @media ${viewport[7]} {
    width: 30px;
  }

  &.social {
    width: 20px;

    @media ${viewport[7]} {
      width: 22px;
    }
  }

  &.xs {
    width: 20px;
  }
  &.sm {
    width: 24px;
  }
  &.md {
    width: 30px;
  }
  &.lg {
    width: 42px;
  }
  &.xl {
    width: 54px;
  }
`;

export default Icon;
