import React from 'react';
import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
import { darken } from 'polished';
import Modal from './components/Modal';
import Modal2 from './components/Modal2';

function App() {
  // const selections = [
  //   { id: 1, title: '리액트' },
  //   { id: 2, title: '자바' },
  //   { id: 3, title: '스프링' },
  //   { id: 4, title: '리액트 네이티브' },
  // ];

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  // Q.
  const onChangePrice = (e) => {
    const price = e.target.value;
    const removedCommaValue = Number(price.replaceAll(',', ''));
    if (removedCommaValue.toLocaleString() !== 'NaN') {
      setPrice(removedCommaValue.toLocaleString());
    }
  };

  // Q. - prompt, confirm 찾아보기
  const inputAlert = () => {
    prompt('어렵나요?');
  };
  const valueAlert = () => {
    !name && !price ? alert('이름과 가격 모두 입력해주세요') : alert(`{ name: ${name}, price: ${price} }`);
  };

  return (
    <>
      <Layout>
        <div>
          <h1>Button</h1>
          <FlexDiv gap='10px'>
            <LargeBtn onClick={() => alert('버튼을 만들어 보세요!')} bColor='rgb(85,239,196)'>
              <div>Large Primary Button ></div>
            </LargeBtn>
            <MediumBtn bColor='rgb(85,239,196)'>Medium</MediumBtn>
            <SmallBtn bColor='rgb(85,239,196)'>Small</SmallBtn>
          </FlexDiv>

          <FlexDiv gap='10px'>
            <LargeBtn onClick={() => alert(inputAlert())} bColor='#FAB1A0' color='#D63031'>
              Large Negative Button
            </LargeBtn>
            <MediumBtn bColor='#FAB1A0' color='#D63031'>
              Medium
            </MediumBtn>
            <SmallBtn bColor='#FAB1A0' color='#D63031'>
              Small
            </SmallBtn>
          </FlexDiv>
        </div>
        <h1>Input</h1>
        <FlexDiv gap='30px'>
          <div>
            <label>이름</label>
            <MediumInput type='text' onChange={onChangeName} value={name} />
          </div>
          <div>
            <label>가격</label>
            {/* Q. */}
            <MediumInput type='text' onChange={onChangePrice} value={price} />
          </div>
          <SmallBtn onClick={valueAlert} bColor='rgb(85,239,196)'>
            저장
          </SmallBtn>
        </FlexDiv>
        <h1>Modal</h1>
        <FlexDiv gap='10px'>
          <SmallBtn onClick={() => setIsOpen(true)} bColor='rgb(85,239,196)'>
            open modal
          </SmallBtn>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
          </Modal>
          <LargeBtn onClick={() => setIsOpen2(true)} bColor='#FAB1A0' color='#D63031'>
            open modal
          </LargeBtn>
          <Modal2 open={isOpen2} onClose={() => setIsOpen2(false)}>
            닫기 버튼 1개가 있고,
            <br />
            외부 영역을 누르면 모달이 닫혀요.
          </Modal2>
        </FlexDiv>
        <SelectDiv>
          <h1>Select</h1>
          <div>
            <FlexDiv gap='10px'>
              <div>
                <SelectBtn>
                  <div>리액트</div>
                  <div>▼</div>
                </SelectBtn>
                {/* <Selection /> */}
              </div>

              <div>
                <SelectBtn>
                  <div>리액트</div>
                  <div>▼</div>
                </SelectBtn>
                {/* <Selection /> */}
              </div>
            </FlexDiv>
          </div>
        </SelectDiv>
      </Layout>
    </>
  );
}

export default App;

const Layout = styled.div`
  margin: 30px;
`;

const FlexDiv = styled.div`
  display: flex;
  gap: ${(props) => props.gap};
  /* justify-content: space-between; */
  margin: 20px;
`;

const LargeBtn = styled.div`
  width: 200px;
  height: 50px;
  padding: 1px, 6px;
  border-radius: 8px;
  border: 3px solid ${(props) => props.bColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 13.33px;
  color: ${(props) => props.color};
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const MediumBtn = styled.div`
  width: 130px;
  height: 45px;
  padding: 1px, 6px;
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
    background-color: ${darken(0.1, '#3498db')};
  }
`;

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

const MediumInput = styled.input`
  height: 40px;
  width: 200px;
  padding: 1px 12px;
  border: 1px solid rgb(51, 51, 51);
  border-radius: 8px;
`;

const SelectDiv = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
  z-index: 2;
`;

const SelectBtn = styled.button`
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
