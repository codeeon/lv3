import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom';

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [program, setProgram] = useState('리액트');
  const selectRef = useRef(null); // handleOutsideClick 제외 대상

  const programs = ['리액트', '자바', '스프링', '리액트 네이티브'];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const selectProgram = (program) => {
    setProgram(program);
    setIsOpen(false);
  };

  // 여기부터
  const handleOutsideClick = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  // 여기까지, document(window) 클릭하면 발생하는 이벤트 -> removeEventListener

  return (
    <>
      <MenuBtn onClick={toggleOpen} ref={selectRef}>
        <div>{program}</div> <div>▼</div>{' '}
      </MenuBtn>
      {isOpen && <Menu programs={programs} selectProgram={selectProgram} />}
    </>
  );
};

const Menu = ({ programs, selectProgram }) => {
  return ReactDom.createPortal(
    <Menus>
      {programs.map((program) => (
        <Selections
          onClick={() => {
            selectProgram(program);
          }}
          key={program}
        >
          <Selection>{program}</Selection>
        </Selections>
      ))}
    </Menus>,
    document.getElementById('selectProgram')
  );
};

export default Select;

const MenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 300px;
  background-color: #fff;
  border-radius: 12px;
`;

const Menus = styled.div`
  position: absolute;
  height: 160px;
  width: 300px;
  margin-top: 10px;
  border: 1px solid rgb(221, 221, 221);
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  top: -100px;
`;

const Selections = styled.div`
  height: 40px;
  width: 300px;
  font-size: 14px;
  /* position: relative; */

  &:hover {
    background-color: rgb(221, 221, 221);
  }
`;

const Selection = styled.div`
  margin-left: 15px;
  padding-top: 15px;
`;
