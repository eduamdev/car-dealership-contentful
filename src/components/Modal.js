import React from 'react';
import styled from 'styled-components';
import viewport from '../styles/media';
import theme from '../styles/theme';
import { close as closeSvg } from './svg';

const ModalWrapper = styled.div`
  margin: 0 auto;
  transition: all 0.4s;
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  grid-template-areas:
    'header'
    'body'
    'footer';
  align-items: center;
  justify-content: center;
  background: ${theme.colors.raisinBlack};
  color: ${theme.colors.lightGrey};

  @media ${viewport[7]} {
    width: 400px;
    height: 400px;
    padding: 24px;
    grid-template-areas:
      'body'
      'footer';
    grid-template-rows: 1fr max-content;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
    top: auto;
    bottom: 1em;
    left: 1em;
  }
`;

const ModalHeader = styled.div`
  padding: 0.75em 3em;
  border-bottom: 1px solid ${theme.colors.darkGrey};
  grid-area: header;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-template-areas: 'clear space close';
  align-items: center;

  @media ${viewport[7]} {
    display: none;
  }
`;

const ModalBody = styled.div`
  padding: 1.5em 3em;
  align-self: start;
  grid-area: body;
`;
const ModalFooter = styled.div`
  padding: 1.5em 3em;
  overflow: auto;
  grid-area: footer;
  border-top: 1px solid ${theme.colors.darkGrey};

  &::after {
    content: '';
    clear: both;
    display: table;
  }

  @media ${viewport[7]} {
    border: 0;
  }
`;
const ClearBtn = styled.span`
  grid-area: clear;
  padding: 1em;
  cursor: pointer;
  color: ${theme.colors.winterGreen};

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const CloseModalBtn = styled.span`
  grid-area: close;
  width: 36px;
  fill: ${theme.colors.lightGrey};
  cursor: pointer;
  margin: 0;

  &:hover,
  &:focus {
    fill: ${theme.colors.winterGreen};
  }
`;

const BtnSave = styled.button`
  background: ${theme.colors.myrtleGreen};
  padding: 0.9em;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  font-size: 1em;
  letter-spacing: 0.8px;
  width: 100%;
  text-align: center;
  color: #fff;

  @media ${viewport[7]} {
    color: ${theme.colors.myrtleGreen};
    font-weight: 200;
    background: transparent;
    text-align: left;
    width: auto;
    float: right;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const BackDrop = styled.div`
  background-color: rgba(195, 195, 195, 0.3);
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
    <div>
      <ModalWrapper
        style={{
          transform: show ? 'translateY(0vh)' : 'translateY(20vh)',
          opacity: show ? '1' : '0',
          visibility: show ? 'visible' : 'hidden'
        }}
      >
        <ModalHeader>
          <ClearBtn>Clear</ClearBtn>
          <span></span>
          <CloseModalBtn onClick={close}>{closeSvg}</CloseModalBtn>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <BtnSave>Save</BtnSave>
        </ModalFooter>
      </ModalWrapper>
    </div>
  );
};

export { Modal, BackDrop };
