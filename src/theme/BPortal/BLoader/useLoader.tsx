import { usePortal } from "../BPortalContext";
import { BLoader } from "./BLoader";
import { LoaderProps } from "./types";

export const useLoader = () => {
  const { addPortal, removePortal } = usePortal();

  const stopLoader = () => {
    removePortal();
  };

  /**
   *
   * @param props
   */
  const startLoader = (props: LoaderProps) => {
    const modal = <BLoader {...props} />;
    addPortal(modal);
  };

  return { startLoader, stopLoader };
};
