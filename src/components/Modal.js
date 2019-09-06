import React from 'react';
import styled from 'styled-components';
import viewport from '../styles/media';

const ModalWrapper = styled.div`
  margin: 0 auto;
  transition: all 0.4s;
  width: 60%;
  padding: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1000000000000000;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  grid-template-areas:
    'header'
    'body'
    'footer';
  align-items: center;
  justify-content: center;
  background: black;

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
    bottom: 0;
  }
`;

const ModalHeader = styled.div`
  padding: 1.5em 3em;
  border-bottom: 1px solid #444;
  grid-area: header;

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
  border: 1px solid #444;

  &::after {
    content: '';
    clear: both;
    display: table;
  }

  @media ${viewport[7]} {
    border: 0;
  }
`;
const CloseModalBtn = styled.span`
  color: white;
  cursor: pointer;
  float: right;
  font-size: 30px;
  margin: 0;

  &:hover {
    color: teal;
  }
`;

const BtnSave = styled.button`
  background: teal;
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
    color: teal;
    font-weight: 200;
    background: transparent;
    text-align: left;
    width: auto;
    float: right;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const modal = ({ show, children, close }) => {
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
          <span>Clear</span>
          <CloseModalBtn onClick={close}>×</CloseModalBtn>
        </ModalHeader>
        <ModalBody>
          <p>{children}</p>
        </ModalBody>
        <ModalFooter>
          <BtnSave>Save</BtnSave>
        </ModalFooter>
      </ModalWrapper>
    </div>
  );
};

export default modal;
