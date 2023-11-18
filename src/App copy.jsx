// import React from 'react';
// import './App.css';
// import Modal from './components/Modal';
// import Select from './components/Select';
// import { useRef, useState } from 'react';

// const BUTTON_WRAPPER_STYLES = {
//   position: 'relative',
//   zIndex: 1,
// };
// const OTHER_CONTENT_STYLES = {
//   position: 'relative',
//   zIndex: 2,
//   backgroundColor: 'red',
//   padding: '10px',
// };

// function App() {
//   return (
//     <>
//       <div style={BUTTON_WRAPPER_STYLES}>
//         <button>open modal</button>
//         <Modal></Modal>
//       </div>

//       <div style={OTHER_CONTENT_STYLES}>Other Contents</div>
//     </>
//   );
// }

// export default App;

// const DropDown = ({ value, setProgram, setProgramsOpen, programsOpen }) => {
//   const ValueClick = () => {
//     setProgram(value);
//     setProgramsOpen(!programsOpen);
//   };
//   return <div onClick={ValueClick}>{value}</div>;
// };

// const DDSelect = () => {
//   const programs = ['리액트', '자바', '스프링', '리액트 네이티브'];
//   const dropDownRef = useRef();
//   const [program, setProgram] = useState('리액트');
//   const [programsOpen, setProgramsOpen] = Select(dropDownRef, programs);

//   return (
//     <div ref={dropDownRef}>
//       <div onClick={() => setProgramsOpen(!programsOpen)} value={program}>
//         {program}
//       </div>
//       {programsOpen && (
//         <div>
//           {programs.map((value, index) => (
//             <DropDown key={index} value={value} setProgramsOpen={setProgramsOpen} setProgram={setProgram} programsOpen={programsOpen} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
