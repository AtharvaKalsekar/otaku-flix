import { ModalAction } from "./constants";

export const showModalAction =
  (modalComponent: JSX.Element) => (dispatch, getState) => {
    dispatch({
      type: ModalAction.SHOW_MODAL,
      payload: { modalComponent },
    });
  };

export const hideModalAcion = () => (dispatch, getState) => {
  dispatch({ type: ModalAction.HIDE_MODAL });
};
