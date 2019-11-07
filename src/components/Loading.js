import React from 'react';
import { loading } from './svg';
import styled from 'styled-components';

const LoadingContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;

    & svg {
      fill #000;
      width: 80px;
    }
`;

export default function Loading() {
  return <LoadingContainer>{loading}</LoadingContainer>;
}
