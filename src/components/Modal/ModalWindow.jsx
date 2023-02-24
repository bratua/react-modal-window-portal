import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useModal } from "../Modal/modalContext";
import { CreatePortal } from "../../utils";

export const ModalWindow = ({ children }) => {
   //Используем кастомный хук модалки с состоянием и методами,
   //которые передали через хук useContext
   const { closeModal, isModalOpen } = useModal();

   //Создаём переменную портала, элемент <div id="modal-root">...</div>,
   //id по умолчанию называется "modal-root", но можно передать ваше
   //навание id в CreatePortal("_ваше_имя_ID_")
   const modalPortal = CreatePortal();

   // console.log("modalPortal", modalPortal);

   useEffect(() => {
      //при монтировании добавляем в body наш modalPortal
      document.body.appendChild(modalPortal);
      return () => {
         //при закрытии модалки удаляем из body наш modalPortal
         document.body.removeChild(modalPortal);
      };
   }, [modalPortal]);

   //Разметка модального окна
   const modalContent = (
      <div>
         <button type="button" onClick={closeModal}>
            Close
         </button>
         {children}
      </div>
   );

   return isModalOpen && ReactDOM.createPortal(modalContent, modalPortal);
};
