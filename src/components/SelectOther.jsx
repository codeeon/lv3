// import React from 'react';
// import { useState, useEffect } from 'react';
// // import styled from 'styled-components';

// const SelectOther = ({ ref, initialState }) => {
//   const [programsOpen, setProgramsOpen] = useState(initialState);

//   useEffect(() => {
//     const pageClickEvent = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) {
//         setProgramsOpen(!programsOpen);
//       }
//     };

//     if (programsOpen) {
//       window.addEventListener('click', pageClickEvent);
//     }

//     return () => {
//       window.removeEventListener('click', pageClickEvent);
//     };
//   }, [programsOpen, ref]);
//   return [programsOpen, setProgramsOpen];
// };

//   return (
//     <div>
//       <SelectDiv>
//         <h1>Select</h1>
//         <div>
//           <FlexDiv gap='10px'>
//             <div>
//               <SelectBtn>
//                 <div>리액트</div>
//                 <div>▼</div>
//               </SelectBtn>
//               {/* <Selection /> */}
//             </div>

//             <div>
//               <SelectBtn>
//                 <div>리액트</div>
//                 <div>▼</div>
//               </SelectBtn>
//               {/* <Selection /> */}
//             </div>
//           </FlexDiv>
//         </div>
//       </SelectDiv>
//     </div>
//   );
// };

// export default SelectOther;

// const FlexDiv = styled.div`
//   display: flex;
//   gap: ${(props) => props.gap};
//   /* justify-content: space-between; */
//   margin: 20px;
// `;

// const SelectDiv = styled.div`
//   border: 3px solid rgb(221, 221, 221);
//   height: 200px;
//   overflow: hidden;
//   position: relative;
//   margin-top: 50px;
//   z-index: 2;
// `;

// const SelectBtn = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0px 28px;
//   border: 1px solid rgb(221, 221, 221);
//   height: 40px;
//   width: 300px;
//   background-color: #fff;
//   border-radius: 12px;
// `;
