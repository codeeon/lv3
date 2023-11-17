import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
// import { darken } from 'polished';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '12px',
  boxSizing: 'border-box',
  padding: '24px',
  backgroundColor: '#FFF',
  width: '300px',
  height: '200px',
  zIndex: 100,
};
const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(221, 221, 221, .8)',
  zIndex: 100,
};

const Modal2 = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <div style={{ display: 'flex' }}>
          <div style={{ fontSize: '15px' }}>{children}</div>
          <CircleBtnDiv>
            <CircleBtn onClick={onClose}>X</CircleBtn>
          </CircleBtnDiv>
        </div>
      </div>
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal2;

const CircleBtnDiv = styled.div`
  display: flex;
  align-items: flex-start;
`;
const CircleBtn = styled.button`
  border: 1px solid rgb(221, 221, 221);
  background-color: #efefef;
  width: 40px;
  height: 40px;
  padding: 1px 6px;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
