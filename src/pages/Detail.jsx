// import ModalComponent from '../components/ModalComponent';
// import ModalPortal from '../helpers/Portal';

// function ProductDetail() {
//   return (
//     <div>
//       <ModalPortal>
//         {modal === 1 ? (
//           <ModalComponent
//             modal_to_check
//             display='none'
//             children2='children2'
//             children3='children3'
//             children1_btn='No'
//             children2_btn='Yes'
//             margin='40px 0 0 0'
//             _onClick={() => setModal(0)}
//             _onClick2={modalAddCart}
//             _onClickBg={() => setModal(0)}
//           />
//         ) : (
//           modal === 2 && (
//             <ModalComponent
//               modal_to_check
//               _disalbed={true}
//               children2='아이2'
//               children3='아이3'
//               children1_btn='no'
//               children2_btn='yes'
//               margin='30px 0 0 0'
//               _onClick={() => setModal(0)}
//               _onClick2={() => navigate('/login')}
//               _onClickBg={() => setModal(0)}
//             />
//           )
//         )}
//       </ModalPortal>
//     </div>
//   );
// }
