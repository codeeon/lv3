import React from 'react';
import './App.css';
import Modal from './components/Modal';

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
        <button>open modal</button>
        <Modal></Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other Contents</div>
    </>
  );
}

export default App;
