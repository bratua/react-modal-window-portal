import { useModal } from "../Modal/modalContext";

export const ModalContent = () => {
   const { closeModal } = useModal();

   const handleSubmit = (e) => {
      // console.log("onSubmit");
      // console.log(e);
      e.preventDefault();

      console.log(e.target.name.value);
      console.log(e.target.password.value);
      closeModal();
   };

   return (
      <>
         <form onSubmit={handleSubmit}>
            <h2>Modal Title</h2>
            <div>
               <p>Modal Content</p>
               <input name="name" type="text" />
               <input name="password" type="password" />
            </div>
            <button type="submit">Submit</button>
         </form>
      </>
   );
};
