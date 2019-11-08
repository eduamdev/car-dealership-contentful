import styled from 'styled-components';
import { viewport } from './Breakpoints';

const Icon = styled.span`
  width: 18px;

  @media ${viewport[7]} {
    width: 20px;
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
