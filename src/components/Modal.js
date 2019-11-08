import React from 'react';
import styled from 'styled-components';
import { viewport } from './Breakpoints';
import theme from '../styles/theme';
import { close as closeSvg } from './svg';

const ModalWrapper = styled.div`
  margin: 0 auto;
  transition: ease 0.15s;
  border-radius: 2px;
  overflow: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100000;
  background: ${theme.colors.raisinBlack};
  color: ${theme.colors.lightGrey};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  grid-template-areas:
    'header'
    'body';
  align-items: center;
  justify-content: stretch;
  align-items: stretch;

  @media ${viewport[7]} {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 550px;
    margin: unset;
    left: unset;
  }

  & .modal-header {
    grid-area: header;
    padding: 2em;

    & .modal-header__wrapper {
      width: 90%;
      margin: 0 auto;
      & .modal-header__close-btn {
        float: right;
        background: transparent;
        color: #ddd;
        fill: #ddd;
        font-size: 1em;
        cursor: pointer;
        width: 28px;

        & svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  & .modal-body {
    grid-area: body;
    padding: 1em 2em;
  }
`;

const BackDrop = styled.div`
  background-color: #000;
  opacity: 0.8;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 1.3s;
  width: 100%;
  z-index: 100;
`;

const Modal = ({ show, children, close }) => {
  return (
    <ModalWrapper
      style={{
        transform: show ? 'translateX(0vw)' : 'translateX(5vw)',
        opacity: show ? '1' : '0',
        visibility: show ? 'visible' : 'hidden'
      }}
    >
      <div className='modal-header'>
        <div className='modal-header__wrapper'>
          <span className='modal-header__close-btn' onClick={close}>
            {closeSvg}
          </span>
        </div>
      </div>
      <div className='modal-body'>{children}</div>
    </ModalWrapper>
  );
};

export { Modal, BackDrop };
