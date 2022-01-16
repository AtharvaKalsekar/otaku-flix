import { ModalAction } from "../actions/constants";

export const modalReducer = (state = {}, action) => {
  console.log("Modal reducer triggerred => ", action);

  switch (action.type) {
    case ModalAction.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
        modalComponent: action.payload.modalComponent,
      };
    case ModalAction.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
        modalComponent: null,
      };
    default:
      return state;
  }
};
