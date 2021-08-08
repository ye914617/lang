const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        menuState: { ...state.menuState, showMenu: !state.menuState.showMenu },
      };
    case "CONTACT_SUCCESS":
      return {
        ...state,
        contactState: {
          ...state.contactState,
          sender: action.payload.senderContact,
          email: action.payload.emailContact,
          title: action.payload.titleContact,
          content: action.payload.contentContact,
          message: action.payload.messageContact,
          submitSuccess: action.payload.submitSuccessContact,
        },
      };
    case "SUBMIT_FORM":
      return { ...state, formSubmitted: true };
    case "CANCEL_FORM":
      return { ...state, formSubmitted: false };
    case "GET_PET_DATA":
      return {
        ...state,
        petState: { ...state.petState, petData: action.payload },
      };
    case "PET_LOADING":
      return { ...state, petState: { ...state.petState, loading: true } };
    case "PET_NOT_LOADING":
      return { ...state, petState: { ...state.petState, loading: false } };
    case "HANDLE_SEARCH":
      let newPetData = state.petState.petData.filter((item) => {
        return (
          item.animal_kind.includes(action.payload) ||
          item.animal_colour.includes(action.payload) ||
          item.animal_sex.includes(action.payload)
        );
      });
      return {
        ...state,
        petState: { ...state.petState, petData: newPetData },
      };

    case "ADOPT":
      //Check whether the pet is already in the adopt list or not, if do exist then return.
      let repeated = state.adoptState.filter((item) => {
        return item.id === action.payload.animal_id;
      });

      if (repeated.length > 0) {
        return { ...state };
      }
      //Else add it to the adopt list.
      return {
        ...state,
        adoptState: [
          ...state.adoptState,
          {
            kind: action.payload.animal_kind,
            colour: action.payload.animal_colour,
            sex: action.payload.animal_sex,
            id: action.payload.animal_id,
            image: action.payload.album_file,
          },
        ],
      };
    case "CANCEL_ADOPT":
      let newAdoptState = state.adoptState.filter((item) => {
        return item.id !== action.payload.id;
      });
      return {
        ...state,
        adoptState: newAdoptState,
      };
    case "INCREASE_DONATE":
      return {
        ...state,
        donateState: {
          donateDatas: state.donateState.donateDatas.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                count: item.count + 1,
                price: (item.price / item.count) * (item.count + 1),
              };
            }
            return item;
          }),
        },
      };
    case "DECREASE_DONATE":
      return {
        ...state,
        donateState: {
          donateDatas: state.donateState.donateDatas.map((item) => {
            if (item.id === action.payload.id && action.payload.count > 1) {
              return {
                ...item,
                count: item.count - 1,
                price: (item.price / item.count) * (item.count - 1),
              };
            }
            return item;
          }),
        },
      };
    case "ADD_TO_CHECKLIST":
      //First check if the item already exist
      if (
        state.checklistState.filter((item) => {
          return item.name === action.payload.name;
        }).length > 0
      ) {
        return {
          ...state,
          checklistState: state.checklistState.map((item) => {
            return item.name === action.payload.name
              ? {
                  ...item,
                  price: action.payload.price,
                  count: action.payload.count,
                  id: action.payload.id,
                  path: action.payload.path,
                }
              : item;
          }),
        };
      }
      //If a new item added in
      return {
        ...state,
        checklistState: [
          ...state.checklistState,
          {
            name: action.payload.name,
            price: parseFloat(action.payload.price),
            count: parseFloat(action.payload.count),
            id: action.payload.id,
            path: action.payload.path,
          },
        ],
      };
    case "ADD_TO_TOTAL":
      return {
        ...state,
        totalState: state.checklistState,
      };
    case "DELETE_FROM_TOTAL":
      let newChecklistState = state.totalState.filter((item) => {
        return item.id !== action.payload;
      });
      return {
        ...state,
        totalState: newChecklistState, //Update both total state and checklist state
        checklistState: newChecklistState, //Because total state value is base on checkliststate
      };
    case "CLEAR_ALL":
      return {
        ...state,
        totalState: [],
        checklistState: [],
      };
    case "CHECK_LOGIN":
      return {
        ...state,
        loginState: { ...state.loginState, isLogin: action.payload },
      };
    case "SHOW_LOGIN":
      return {
        ...state,
        loginState: { ...state.loginState, loginPage: action.payload },
      };
    case "SHOW_ALERT":
      return {
        ...state,
        alertState: {
          show: action.payload.show,
          alertType: action.payload.alertType,
          alertMsg: action.payload.alertMsg,
        },
      };
    case "REMOVE_ALERT":
      return {
        ...state,
        alertState: {
          show: false,
          alertType: "",
          alertMsg: "",
        },
      };

    default:
      return state;
  }
};

export default reducer;
