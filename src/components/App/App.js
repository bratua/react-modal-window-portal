import React from "react";
import "./App.css";
import { useModal } from "../Modal/modalContext";
import { ModalWindow } from "../Modal/ModalWindow";
import { ModalContent } from "../Modal/ModalContent";
// import { ModalProvider } from "../Modal";
// console.log(useModal);

export const App = () => {
   const { closeModal, openModal, isModalOpen } = useModal();

   return (
      <>
         <div className="App">APP</div>
         <p>Is open? {isModalOpen.toString()}</p>
         <button type="button" onClick={openModal}>
            Open
         </button>

         <button type="button" onClick={closeModal}>
            Close
         </button>

         {isModalOpen && (
            <ModalWindow>
               <ModalContent />
            </ModalWindow>
         )}
      </>
   );
};
