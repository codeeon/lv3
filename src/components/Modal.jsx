import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { darken } from 'polished';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '12px',
  boxSizing: 'border-box',
  padding: '24px',
  backgroundColor: '#FFF',
  width: '500px',
  height: '300px',
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

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div>{children}</div>
        <BtnBox>
          <SmallBtn bColor='#FAB1A0' color='#D63031' onClick={onClose}>
            닫기
          </SmallBtn>
          <SmallBtn bColor='rgb(85,239,196)'>확인</SmallBtn>
        </BtnBox>
      </div>
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;

const SmallBtn = styled.div`
  width: 100px;
  height: 40px;
  padding: 1px 6px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.bColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
  font-size: 13.33px;
  color: ${(props) => props.color};
  &:active {
    background-color: ${(darken(0.1), '#3498db')};
  }
`;

const BtnBox = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 5px;
`;
