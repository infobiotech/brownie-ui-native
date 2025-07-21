import { usePortal } from "../BPortalContext";
import { BModal } from "./BModal";
import { ModalProps } from "./types";

export const useModal = () => {
  const { addPortal, removePortal } = usePortal();

  const closeModal = () => {
    removePortal();
  };

  /**
   *
   * @param props
   */
  const openModal = (props: ModalProps) => {
    const modal = <BModal {...props} />;
    addPortal(modal);
  };

  return { openModal, closeModal };
};
