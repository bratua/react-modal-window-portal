export const CreatePortal = (namePortal = "modal-root") => {
   const portal = document.createElement("div");
   const portalId = document.createAttribute("id");
   portalId.value = namePortal;
   portal.setAttributeNode(portalId);
   return portal;
};
