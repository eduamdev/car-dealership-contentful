import React from 'react';
import styled from 'styled-components';
import viewport from '../styles/media';
import theme from '../styles/theme';
import { close as closeSvg } from './svg';

const ModalWrapper = styled.div`
  margin: 0 auto;
  transition: ease 0.15s;
  border-radius: 8px;
  /* padding: 0; */
  /* padding: 2em 1em; */
  overflow: hidden;
  overflow-y: auto;
  width: 100%;
  height: 70%;
  max-width: 100vw;
  max-height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100000;
  display: grid;
  /* grid-template-rows: max-content 1fr max-content;
  grid-template-areas:
    'header'
    'body'
    'footer'; */
  grid-template-rows: 1fr;
  grid-template-areas: 'body';
  align-items: center;
  justify-content: stretch;
  background: ${theme.colors.raisinBlack};
  color: ${theme.colors.lightGrey};

  @media ${viewport[7]} {
    width: 450px;
    height: 450px;
    /* grid-template-areas:
      'body'
      'footer';
    grid-template-rows: 1fr max-content; */
    box-shadow: -5px 8px 40px 22px rgba(0, 0, 0, 0.18);
    /* top: auto; */
    top: 12.5em;
    left: 0;
    position: absolute;
  }
`;

const ModalHeader = styled.div`
  /* padding: 0.75em 1em;
  grid-area: header;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-template-areas: 'clear space close';
  align-items: center; */
  /* border-bottom: 1px solid ${theme.colors.darkGrey}; */

  @media ${viewport[7]} {
    display: none;
  }
`;

const ModalBody = styled.div`
  /* padding: 1.5em 1em; */
  padding: 2em 0;
  align-self: stretch;
  justify-self: center;
  grid-area: body;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-row-gap: 1em;
  width: 80%;
  max-height: 80%;
  margin: auto;

  @media ${viewport[7]} {
    margin: 0;
    max-height: inherit;
  }
`;
const ModalFooter = styled.div`
  display: none;
  grid-area: footer;
  padding: 1.5em 1em;
  overflow: auto;
  /* border-top: 1px solid ${theme.colors.darkGrey}; */

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
  /* grid-area: close; */
  /* width: 36px; */
  fill: ${theme.colors.lightGrey};
  cursor: pointer;
  margin: 0;

  position: absolute;
  top: 0.5em;
  right: 1em;
  width: 2em;
  visibility: visible;

  &:hover,
  &:focus {
    fill: ${theme.colors.winterGreen};
  }

  @media ${viewport[7]} {
    visibility: hidden;
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
  color: #ddd;

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
  /* background-color: rgba(255, 255, 255, 0.25); */
  background-color: rgba(150, 150, 150, 0.4);
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
        transform: show ? 'translateY(0vh)' : 'translateY(-5vh)',
        opacity: show ? '1' : '0',
        visibility: show ? 'visible' : 'hidden'
      }}
    >
      <ModalHeader>
        {/* <ClearBtn>Clear</ClearBtn>
          <span></span> */}
        <CloseModalBtn onClick={close}>{closeSvg}</CloseModalBtn>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>{/* <BtnSave>Save</BtnSave> */}</ModalFooter>
    </ModalWrapper>
  );
};

export { Modal, BackDrop };
