import { usePortal } from "../BPortalContext";
import { BToast } from "./BToast";
import { ToastProps } from "./types";

export const useToast = () => {
  const { addPortal, removePortal } = usePortal();

  const closeToast = () => {
    removePortal();
  };

  /**
   *
   * @param props
   */
  const openToast = (props: ToastProps) => {
    const toast = <BToast {...props} />;
    addPortal(toast);
  };

  return { openToast, closeToast };
};
