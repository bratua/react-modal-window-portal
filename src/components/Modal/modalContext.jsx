// Стэйты модалки и логика "открыть/закрыть"
// Возврвщает разметку Контекст-провайдера, в качестве значений передаём стэйт, и методы открыть и закрыть

import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => {
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setIsModalOpen(false);
   };

   const toggleModal = () => {
      setIsModalOpen((isModalOpen) => !isModalOpen);
   };

   return (
      <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, toggleModal }}>
         {children}
      </ModalContext.Provider>
   );
};
