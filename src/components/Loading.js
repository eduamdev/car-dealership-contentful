import React from 'react';
import { loading } from './svg';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 80px;

  & svg {
    fill: #000;
    width: 100%;
    margin-left: 20px;
  }
`;

export default function Loading() {
  return <LoadingContainer>{loading}</LoadingContainer>;
}
