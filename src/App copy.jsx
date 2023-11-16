import React from 'react';
import './App.css';

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1,
};
const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px',
};

function App() {
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button>모달 열기</button>
      </div>

      <div style={OTHER_CONTENT_STYLES}></div>
    </>
  );
}

export default App;
